"use client";
import Link from "next/link";

import MyBasketList from "../My-mart/MyBasketList";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const MyCart = () => {
  const { items, total } = useSelector((store) => store.basket);
  console.log(items);
  const { data } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.totalAmount());
  }, [items]);
  //Stipe
  const STRIPE_PUBLIC_KEY =
    "pk_test_51LwNLVSI9OJZzJoCs1f4ZDR0hoYM09nsTTvPvZV6ch7nWnDCQ2rHqSCZTLqSr4hqGtKHcus2WsLVwIs1cIJlhYZR00wZ2V2mjo";

  const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

  const createCheckOutSesssion = async () => {
    const stripe = await stripePromise;
    const checkoutsession = await axios.post("api/checkout-session", {
      items: items,
      email: data.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutsession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  if (items == 0) {
    return (
      <section className="flex  justify-center items-center bg-[rgba(26,2,16,0.88)] text-white h-screen">
        <div>
          <h1 className="font-bold text-2xl capitalize mt-">
            your cart is empty
          </h1>
          <div className="flex justify-center mt-8">
            <Link
              href="/"
              className="bg-white text-black shadow-slate-700 shadow-2xl rounded-2xl border-zinc-300 border-2 px-5 py-2 hover:bg-slate-600 hover:text-white"
            >
              Shop Now..
            </Link>
          </div>
        </div>
        <br />
      </section>
    );
  }
  return (
    <div className=" bg-[rgba(26,2,16,0.88)] min-h-screen">
      <h2 className="text-xl font-bld  text-white">Your cart</h2>
      <div className="">
        {items?.map(({ id, image, price, description, title, quantity }) => (
          <div key={id}>
            <MyBasketList
              id={id}
              image={image}
              price={price}
              title={title}
              desc={description}
              quantity={quantity}
            />
          </div>
        ))}
      </div>

      <div className="   text-white h-52 space-y-6  ">
        <div className="space-y-2  text-right  mr-4 my-center">
          <p>
            Total amount:
            <span className="font-bold space-x-2">$ {total.toFixed(2)}</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>

        <div className=" flex justify-end space-x-4 mt-4 mr-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            <Link href="/">Back to shop</Link>
          </button>
          {!data?(<button
            onClick={signIn}
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span >please login  </span>
          </button>):(<button
            onClick={createCheckOutSesssion}
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
          </button>)}
         
        </div>
      </div>
    </div>
  );
};

export default MyCart;
