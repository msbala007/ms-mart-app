"use client";
import Image from "next/image";
import React from "react";
import { cartActions } from "../../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const MyBasketList = ({ id, image, price, quantity, desc, title }) => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((store) => store.basket);
  // useEffect(() => {
  //   dispatch(cartActions.totalAmount);
  // }, []);
  const removeItem = () => {
    dispatch(cartActions.removeFromCart({ id }));
  };
  const increment = () => {
    dispatch(cartActions.IncreaseItems(id));
  };

  const decrement = () => {
    dispatch(cartActions.DecrementItems(id));
  };
  return (
    <>
      <div
        key={id}
        className="flex flex-col justify-center p-2 space-y-4  mx-center
         text-white "
      >
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                // src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                src={image}
                alt={id}
               
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="sm:hidden">
                    <h3 className="text-lg font-semibold  leading-snug  line-clamp-1 ">
                      {title}
                    </h3>
                  </div>
                  <div className="flex   justify-center items-center space-x-4 ">
                    <button
                      onClick={decrement}
                      className="font-bold text-2xl border-2 border-white rounded-full p-4 w-6 h-6 flex justify-center items-center"
                    >
                      -
                    </button>
                    <h1 className="font-bold text-xl">{quantity}</h1>
                    <button
                      onClick={increment}
                      className="font-bold text-2xl border-2 border-white rounded-full  p-4 w-6 h-6 flex justify-center items-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">${price}</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      75.50€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    onClick={removeItem}
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current visited:text-purple-500"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <hr className="fond-bold text-2xl" />
      </div>
    </>
  );
};

export default MyBasketList;