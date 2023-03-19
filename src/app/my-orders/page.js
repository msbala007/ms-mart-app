"use client";
import React, { useEffect, useState } from "react";
import MyOrders from "../My-mart/MyOrders";
// import { getSession } from "next-auth/react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { db } from "../../../firebase";
import moment from "moment";
import Link from "next/link";


const page = () => {
const [orderData, setOrderData] = useState([]);
  
  const { data } = useSession();

  

  useEffect(() => {
    const getData = async () => {
      const session = await getSession();

      const order = await db
        .collection("users")
        .doc(session?.user.email)
        .collection("orders")
        .orderBy("timestamp", "desc")
        .get();
      setOrderData(
        order.docs.map((doc) => ({
          id: doc.id,
          amount: doc.data().amount,
          images: doc.data().images,
          timestamp: moment(doc.data().timestamp.toDate()).unix(),
        }))
      );
      // console.log(order.amount);
    };
    getData();
  }, []);

    if (!data) {
    return (
      <section className="flex justify-center items-center bg-[rgba(26,2,16,0.88)] h-screen text-white">
        <div>
          <h1 className="font-bold text-2xl capitalize mt-">
          Please signIn to see your orders
          </h1>
          <div className="flex justify-center mt-8">
            <button
              onClick={signIn}
              className=" shadow-slate-700 shadow-2xl rounded-2xl border-zinc-300 border-2 px-5 py-2 hover:bg-slate-600 hover:text-white"
            >
           Sign In
            </button>
          </div>
        </div>
        <br />
      </section>
    );
  }

  

  return (
    <>
      <div className=" bg-[rgba(26,2,16,0.88)] min-h-screen text-white">
        <h1 className="flex justify-center w-full">My Orders</h1>

        {orderData?.map(({ amount, id, images, timestamp }) => (
          <div key={id}>
            <MyOrders
              id={id}
              amount={amount}
              images={images}
              timestamp={timestamp}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
