import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
export default function BasketButton() {
  return (
    <div className="fixed bottom-3 left-3 bg-black text-yellow-400 text-lg size-12 rounded-full flex justify-center items-center shadow-md  shadow-black hover:border-2 hover:border-black hover:bg-yellow-400 hover:text-black">
      <FontAwesomeIcon icon={faShoppingBasket} />
    </div>
  );
}
