"use client";
import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product, quantity) => {
    const productInBasket = basket.find((item) => item.id === product.id);

    if (productInBasket) {
      const updatedBasket = basket.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...product, quantity }]);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
