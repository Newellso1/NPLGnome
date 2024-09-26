"use client";

import Link from "next/link";
import Image from "next/image";
import { metalMania } from "@/app/products/[slug]/page";
import Mascot from "@/public/images/Mascot.png";

export default function TopHero() {
  return (
    <div className="flex flex-col justify-center items-center  w-full overflow-hidden h-[20em] n">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-6 text-center  max-w-[32em]">
          <h1 className={`${metalMania.className} text-6xl`}>
            There is no place like Gnome
          </h1>
          <Link
            href="/store"
            className="border-black border-2 p-2 px-4 uppercase font-semibold w-fit hover:bg-black hover:text-yellow-400"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
