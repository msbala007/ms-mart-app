import { useSession } from "next-auth/react";

const stripe = require("stripe")(
  "sk_test_51LwNLVSI9OJZzJoCmoPhC3F6yHOTj94cKrweCeZOnCi83pz9t2SjNSQzHIlbrnO9M1WBORHnmg9xurBDGdqxbwbW00JxPWiUHl"
);

async function createStripeSession(req, res) {
  //   const { data } = useSession();
  const { items, email } = req.body;

  // console.log(items);
  const tranFormedItems = items.map((item) => ({
    quantity: item.quantity,

    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        images: [item.image],
        name: item.title,
      },
    },
  }));

  console.log(tranFormedItems);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // shipping_rates: ["shr_1MdWcRSI9OJZzJoCoaoZR2P7"],
    shipping_address_collection: {
      allowed_countries: ["IN", "US"],
    },
    line_items: tranFormedItems,
    mode: "payment",
    success_url: "https://ms-mart-beige.vercel.app/success",
    cancel_url: "https://ms-mart-beige.vercel.app/",
    metadata: {
      email: email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
}

export default createStripeSession;
