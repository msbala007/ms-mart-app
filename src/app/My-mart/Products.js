"use client";
import React from "react";
import ProductsList from "./ProductsList";
import Dummy from "./DummyData";
import Banner from "./Banner";

const Products = ({ products }) => {
  return (
    <div>
      <h1 className="p-4 text-lg font-bold">This is for you!!</h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 w-full sm:mx-auto ">
        {products.map(({ id, image, title, price, description }) => (
          <div key={id}>
            <ProductsList
              id={id}
              image={image}
              price={price}
              title={title}
              desc={description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
