import { metalMania } from "@/app/products/[slug]/page";
import BasketItem from "./BasketItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function BasketPage({ basketOpen, setBasketOpen, basket }) {
  return (
    <div
      className={`fixed w-full h-full p-2 bg-yellow-400 transition-all ${
        basketOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className={`${metalMania.className} text-4xl`}>Basket</h1>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-2xl"
          onClick={() => setBasketOpen(!basketOpen)}
        />
      </div>
      {basket ? (
        <ul className="flex flex-col gap-4 mt-4">
          {basket.map((item) => (
            <li key={item.id}>
              <BasketItem
                name={item.name}
                source={item.picture}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>empty</p>
      )}
    </div>
  );
}
