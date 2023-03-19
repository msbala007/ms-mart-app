"use client";

import Image from "next/image";
import Shoe from "../Image/shoe.jpg";
import { useSession, signIn, signOut } from "next-auth/react";
import moment from "moment";

const MyOrders = ({ amount, id, images, timestamp }) => {
  

  return (
    <>
      <div className="   ">
        <div className=" w-full h-12 flex items-center justify-evenly">
          <div>
            <h1 className="ml-4">
              Ordered On {moment.unix(timestamp).format("DD MM YYYY")}
            </h1>
          </div>
          <div>$ {amount.toFixed(2)}</div>

          {/* <h1>{amount}</h1> */}
        </div>
        <div className="mt-4 flex overflow-x-auto pb-2 justify-evenly w-full space-x-2  ">
          {images.map((image) => (
            <img src={image} className="w-28 h-24 rounded-lg" />
          ))}
        </div>
        <div className="flex justify-center">
          <hr className="w-full mt-4 " />
        </div>
      </div>
    </>
  );
};

export default MyOrders;
