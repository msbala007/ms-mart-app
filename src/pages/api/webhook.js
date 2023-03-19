import { buffer } from "micro";
import * as admin from "firebase-admin";

const Account = require("../../../msmart.json");
///
const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(Account) })
  : admin.app();

//
const stripe = require("stripe")(process.env.STRIPE_KEY) 





const endpointSecret=process.env.SECRET


export const config = {
  api: { bodyParser: false },
};

const orderDetails = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Order added to the ${session.id} DB`);
    });
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const Buf = await buffer(req);
    // const payload = requestBuffer.toString();
    const signature = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(Buf, signature, endpointSecret);
    } catch (error) {
      console.log("webHooks error", error);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("payment", session);
      return orderDetails(session)
        .then(() => res.status(200))

        .catch((err) => res.status(404).send(`web hook error ${err.message}`));
    } else {
      res.setHeader("Allow", "POST");
      res.status(404).send("notg allowed");
    }
  }
};

export default handler;
