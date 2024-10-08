import { useBasket } from "./CartContext";

export default function BasketFooter() {
  const { totalPrice } = useBasket();
  return (
    <div className=" border-t-4 border-black flex items-center justify-center">
      <div className=" w-1/2 text-xl text-left p-2">Total Price: </div>
      <div className=" w-1/2 text-xl text-right p-2">${totalPrice}</div>
    </div>
  );
}
