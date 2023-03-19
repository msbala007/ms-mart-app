"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";

const ProductsList = ({ id, image, price, desc, title }) => {

  const dispatch = useDispatch();
  const addtocart = () => {
    const product = { id, image, price, desc, title };
    dispatch(cartActions.addToCart(product));
  };
  return (
    <>
      <div key={id} className=" m-2 space-y-3 ">
        <div className=" h-48 flex justify-center items-center rounded-lg">
          <img src={image} alt={id} className="h-48 w-48 rounded-lg mx-auto sm:w-48 sm:h-48"  />
        </div>

        <div className="flex justify-between   ">
          <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
          <h1>${price}</h1>
        </div>
        <h6 className="line-clamp-3">{desc}</h6>
        {/* <h6>{quantity}</h6> */}
        <button
          onClick={addtocart}
          className="border-2 border-white py-2 px-4 rounded-full hover:bg-yellow-700 hover:text-white "
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductsList;
