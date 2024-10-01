"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import BasketPage from "./BasketPage";
import { useState } from "react";
import { useBasket } from "./CartContext";
export default function BasketButton({}) {
  const [basketOpen, setBasketOpen] = useState(false);
  const { basket } = useBasket();
  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  return (
    <>
      <div
        className="fixed bottom-3 left-3 bg-black text-yellow-400 text-lg size-12 rounded-full flex justify-center items-center shadow-md  shadow-black hover:border-2 hover:border-black hover:bg-yellow-400 hover:text-black"
        onClick={toggleBasket}
      >
        <FontAwesomeIcon icon={faShoppingBasket} />
        <span
          className={` bg-red-700 ${
            basket.length > 0 ? "absolute" : "hidden"
          } -top-1 -right-1 size-5 rounded-full flex justify-center items-center text-sm`}
        >
          {basket.length > 0 ? `${basket.length}` : ""}
        </span>
      </div>
      <BasketPage
        basketOpen={basketOpen}
        setBasketOpen={setBasketOpen}
        basket={basket}
      />
    </>
  );
}
