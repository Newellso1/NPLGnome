import Image from "next/image";
import Gnome from "@/public/images/gnome_1.jpeg";
import { metalMania } from "@/app/products/[slug]/page";
import Link from "next/link";

export default function Product({ name, imageSrc, price, link }) {
  return (
    <>
      <div className="w-80 flex flex-col gap-2 p-4">
        <img src={imageSrc} alt="Gnome" className="w-full" />
        <h2 className={`${metalMania.className} text-2xl`}>{name}</h2>
        <p>${price}</p>
        <Link href={`/products/${link}`} className="underline">
          View Product
        </Link>
      </div>
    </>
  );
}
