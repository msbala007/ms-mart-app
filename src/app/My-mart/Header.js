"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Google from "next-auth/providers/google";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";

import RemoveIcon from "@mui/icons-material/Remove";

import AddIcon from "@mui/icons-material/Add";

import Image from "next/image";
import Account from "./Account";
import MobileView from "./MobileView";

const Header = () => {
  const { data } = useSession();

  const [isOpen, setOpen] = useState(false);
  const items = useSelector((store) => store.basket.items);

  return (
    <>
      <div className="sticky  top-0 z-10 bg-[rgba(26,2,16,0.88)] text-white font-Roboto">
        <header
          className=" flex justify-around 
      w-full h-16 items-center   "
        >
          <div className="lg:hidden xl:hidden flex justify-center items-center">
            <button onClick={() => setOpen(!isOpen)}>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              ) : (
                <></>
              )}
            </button>
          </div>
          <h1 className="font-bold">MS MART</h1>
          <div className="space-x-6 sm:hidden  ">
            <Link href="/">{process.env.NAME}</Link>
            <Link href="/">Products</Link>
            <Link href="/my-orders">My Orders</Link>
          </div>

          <div className="flex justify-center items-center space-x-6  ">
            <div>
              <Link href="/mycart" className="relative">
                <ShoppingCartOutlinedIcon fontSize="medium" />
                <span className="-top-4 flex justify-center items-center left-4 w-4 text-center  absolute  font-bold bg-green-600 rounded-full">
                  {items.length}
                </span>
              </Link>
            </div>
            <div className="sm:hidden  ">
              <button className=" " type="button">
                {!data ? (
                  ""
                ) : (
                  <div className="flex justify-center items-center">
                    <Avatar
                      fontSize="small"
                      src={data.user.image}
                      className="w-10 h-10"
                    />
                  </div>
                )}
              </button>
            </div>
            <div className="sm:hidden md:hidden">
              <Account />
            </div>

            <div>
              {isOpen ? <MobileView close={() => setOpen(!isOpen)} /> : <></>}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
