"use client";

import ProductList from "@/Components/ProductList";
import { Suspense } from "react";
import { metalMania } from "../products/[slug]/page";

export default function Store() {
  return (
    <main className="flex flex-col gap-4 items-center w-full">
      <div className="bg-black w-full text-yellow-400 flex flex-col justify-center items-center h-96">
        <h2 className={`${metalMania.className} text-6xl text-center`}>
          Shop All Gnomes
        </h2>
      </div>

      <Suspense>
        <ProductList />
      </Suspense>
    </main>
  );
}
