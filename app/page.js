"use client";
import Link from "next/link";
import TopHero from "@/Components/TopHero";
import Mascot from "@/public/images/Mascot.png";
import Image from "next/image";
import { metalMania } from "./products/[slug]/page";
import ImageCarousel from "@/Components/Carousel/ImageCarousel";
import { useProducts } from "@/public/ProductFetch";

export default function Home() {
  const products = useProducts();
  return (
    <main className="flex flex-col w-full bg-yellow-400">
      <TopHero />
      {/* <Image src={Mascot} alt="A Gnome" width={275} /> */}

      <div className="bg-black text-yellow-400 text-center flex flex-col items-center gap-4 md:gap-12 p-4 md:p-6 py-20 md:py-24 ">
        <h3 className={`${metalMania.className} text-4xl md:text-6xl`}>
          Welcome metalhead gnome warrior
        </h3>
        <p className=" text-lg md:text-2xl">
          Enter the garden of mayhem and behold our brutal gnome collection!
        </p>
        <div className=" md:hidden">
          <ImageCarousel />
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-6 max-w-7xl ">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="flex flex-col  gap-4 text-left">
              <img
                src={product.picture}
                alt={product.name}
                className=" max-w-96"
              />
              <div className="flex flex-col">
                <h3 className={`${metalMania.className} text-3xl`}>
                  {product.name}
                </h3>
                <Link
                  href={`/products/${product.id}`}
                  className=" underline text-lg -my-1"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/store"
            className=" text-2xl md:text-3xl border-2 border-yellow-400 p-2 px-4 md:p-3 md:px-8 hover:bg-yellow-400 hover:text-black"
          >
            Shop All Gnomes
          </Link>
        </div>
      </div>
    </main>
  );
}
