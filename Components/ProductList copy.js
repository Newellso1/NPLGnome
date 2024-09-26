"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error(error);
      }
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className=" flex flex-col items-center gap-4 bg-black p-4 rounded-md max-h-screen h-5/6 overflow-scroll">
      {products.map((product) => (
        <div key={product.id}>
          <Product
            name={product.name}
            imageSrc={product.picture}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}
