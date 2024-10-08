"use client";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useProducts } from "@/public/ProductFetch";

export default function ProductList() {
  const products = useProducts();

  return (
    <div className=" flex flex-col items-center gap-4 p-4 rounded-md max-h-screen md:max-h-none h-5/6 overflow-scroll">
      <ul className="no-scrollbar flex flex-col justify-center items-starts  w-full gap-2 md:gap-4 md:flex-row md:flex-wrap md:max-w-[100em]">
        {products.map((product) => (
          <li key={product.id}>
            <Product
              name={product.name}
              imageSrc={product.picture}
              price={product.price}
              link={product.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
