import Image from "next/image";
import Link from "next/link";
import React from "react";
import Shoe from "../Image/success.jpg";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src={Shoe}
          alt="success"
          height="50px"
          width="50px"
          className="w-52 h-52 xl:w-60 lg:h-60"
        />
        {/* <h1 className="font-bold text-lg ">Thank You!!!!</h1> */}
        <Link href="/my-orders" className="bg-amber-400 px-6 py-2 rounded-full">
          Go To My Orders
        </Link>{" "}
      </div>
    </div>
  );
};

export default page;
