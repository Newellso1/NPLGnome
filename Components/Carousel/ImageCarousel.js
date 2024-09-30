import { useProducts } from "@/public/ProductFetch";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

export default function ImageCarousel() {
  const products = useProducts();

  return (
    <div className="w-fit z-0">
      <Carousel loop="true">
        {products.map((product) => (
          <img
            src={product.picture}
            alt={product.name}
            className=""
            key={product.id}
          />
        ))}
      </Carousel>
    </div>
  );
}
