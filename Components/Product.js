import Image from "next/image";
import Gnome from "@/public/images/gnome_1.jpeg";

export default function Product({ name, imageSrc, price }) {
  return (
    <>
      <div className="w-60 bg-yellow-400 rounded-md p-4">
        <img src={imageSrc} alt="Gnome" />
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
    </>
  );
}
