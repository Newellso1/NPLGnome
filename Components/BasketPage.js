import { metalMania } from "@/app/products/[slug]/page";
import BasketItem from "./BasketItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BasketFooter from "./BasketFooter";

export default function BasketPage({ basketOpen, setBasketOpen, basket }) {
  return (
    <div
      className={`fixed w-full h-full p-2 py-4 bg-yellow-400 transition-all flex flex-col items-center ${
        basketOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full w-full md:w-[60em]">
        <div className="flex flex-grow-0 justify-between items-center">
          <h1 className={`${metalMania.className} text-4xl`}>Basket</h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl"
            onClick={() => setBasketOpen(!basketOpen)}
          />
        </div>
        <div className=" flex-grow overflow-scroll">
          {basket ? (
            <ul className="flex flex-col gap-4 mt-4 ">
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
        <div className="flex-grow-0">
          <BasketFooter />
        </div>
      </div>
    </div>
  );
}
