"use client";

import { Metal_Mania } from "next/font/google";

import { useProducts } from "@/public/ProductFetch";

export const metalMania = Metal_Mania({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProductPage({ params }) {
  const products = useProducts();
  console.log(products);

  const productSlug = parseInt(params.slug);
  const productInfo = products.find((product) => product.id === productSlug);

  if (!productInfo) {
    return <h2>Gnome is not here</h2>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className={`${metalMania.className} text-4xl`}>{productInfo.name}</h2>
      <img src={productInfo.picture} alt="Gnome" />
      <p>{productInfo.description}</p>
    </div>
  );
}
