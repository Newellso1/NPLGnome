"use client";

import { Metal_Mania } from "next/font/google";
import { useProducts } from "@/public/ProductFetch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "@/Components/CartContext";

export const metalMania = Metal_Mania({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(0);
  const products = useProducts();
  const productSlug = parseInt(params.slug);
  const productInfo = products.find((product) => product.id === productSlug);
  const { addToBasket } = useBasket();

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

  const handleAddToBasket = () => {
    addToBasket(productInfo, quantity);
    setQuantity(0);
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col gap-2 md:max-w-[35em]">
        <div className="flex justify-between items-center">
          <h2 className={`${metalMania.className} text-4xl`}>
            {productInfo.name}
          </h2>
          <h2 className="text-2xl">${productInfo.price}</h2>
        </div>
        <img
          src={productInfo.picture}
          alt="Gnome"
          className="md:max-w-[40em]"
        />
        <p className="md:max-w-[40em]">{productInfo.description}</p>
        <div className="flex justify-between text-xl mt-4">
          <button
            onClick={handleAddToBasket}
            disabled={quantity === 0}
            className={`border-2 border-black ${
              quantity > 0 ? "bg-black text-yellow-400" : ""
            }  hover:bg-black hover:text-yellow-400 p-1 px-6`}
          >
            Add to cart
          </button>
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="text-black"
              onClick={handleDecreaseQuantity}
            />

            <span className="text-2xl pointer-events-none">{quantity}</span>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="text-black"
              onClick={handleIncreaseQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
