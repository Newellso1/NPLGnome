"use client";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useProducts } from "@/public/ProductFetch";

export default function ProductList() {
  const products = useProducts();

  return (
    <div className=" flex flex-col items-center gap-4 bg-black p-4 rounded-md max-h-screen h-5/6 overflow-scroll">
      <ul className="flex flex-col gap-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Product
                name={product.name}
                imageSrc={product.picture}
                price={product.price}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
