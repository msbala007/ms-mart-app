import "./globals.css";
import Banner from "./My-mart/Banner";
import Header from "./My-mart/Header";
import Dummy from "../app/My-mart/DummyData";

import Products from "./My-mart/Products";
import Fotoer from "./My-mart/Fotoer";
const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  return res.json();
};
export default async function Home() {
  const data = await getProducts();

  return (
    <>
      <div className="max-w-screen-2xl bg-[rgba(26,2,16,0.88)] min-h-screen text-white font-Roboto">
        <section className="">
          <Banner />
        </section>
        <section id="Lists">
          <Products products={data} />
        </section>
        <section><Fotoer /></section>
      </div>
    </>
  );
}
