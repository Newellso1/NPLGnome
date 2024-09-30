"use client";

import { Metal_Mania } from "next/font/google";

import { useProducts } from "@/public/ProductFetch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export const metalMania = Metal_Mania({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(0);
  const products = useProducts();
  const productSlug = parseInt(params.slug);
  const productInfo = products.find((product) => product.id === productSlug);

  if (!productInfo) {
    return <h2>Gnome is not here</h2>;
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className={`${metalMania.className} text-4xl`}>
          {productInfo.name}
        </h2>
        <h2 className="text-2xl">${productInfo.price}</h2>
      </div>
      <img src={productInfo.picture} alt="Gnome" />
      <p>{productInfo.description}</p>
      <div className="flex justify-between text-xl mt-4">
        <button className="border-2 border-black hover:bg-black hover:text-yellow-400 p-1 px-6">
          Add to cart
        </button>
        <div className="flex gap-4 justify-center items-center">
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="text-black"
            onClick={handleIncreaseQuantity}
          />
          <span className="text-2xl">{quantity}</span>
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="text-black"
            onClick={handleDecreaseQuantity}
          />
        </div>
      </div>
    </div>
  );
}
