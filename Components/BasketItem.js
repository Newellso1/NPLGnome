import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
export default function BasketItem({
  name = "Product",
  source,
  price = "0.00",
  quantity = 1,
  id,
}) {
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
          <FontAwesomeIcon icon={faMinusCircle} />
          {quantity}
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTrashCan} className="text-xl" />
        </div>
      </div>
    </div>
  );
}
