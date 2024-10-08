"use client";
import { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = basket.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [basket]);

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
    <BasketContext.Provider
      value={{ basket, setBasket, totalPrice, addToBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
