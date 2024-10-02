import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useBasket } from "./CartContext";

export default function BasketItem({
  name = "Product",
  source,
  price = "0.00",
  quantity = 1,
  id,
}) {
  const { basket, setBasket } = useBasket();
  const basketID = id;

  const handleIncreaseQuantity = () => {
    setBasket(
      basket.map((item) =>
        item.id === basketID ? { ...item, quantity: quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setBasket(
        basket.map((item) =>
          item.id === basketID ? { ...item, quantity: quantity - 1 } : item
        )
      );
    }
  };

  const handleRemoveProduct = () => {
    setBasket(basket.filter((item) => item.id !== basketID));
  };
  return (
    <div className="flex py-2  items-center gap-2 w-full border-t-4 border-b-4 border-black ">
      <div className="w-1/3">
        <img src={source} alt={name} className="w-28" />
      </div>
      <div className="w-1/3">
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            icon={faMinusCircle}
            onClick={handleDecreaseQuantity}
            className=""
          />
          {quantity}
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={handleIncreaseQuantity}
            className=""
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={handleRemoveProduct}
            className="text-xl hover:text-red-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
