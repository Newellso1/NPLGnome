import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error(error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return products;
};
