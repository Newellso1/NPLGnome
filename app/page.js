"use client";

import TopHero from "@/Components/TopHero";
import Mascot from "@/public/images/Mascot.png";
import Image from "next/image";
import { metalMania } from "./products/[slug]/page";
export default function Home() {
  return (
    <main className="flex flex-col w-full bg-yellow-400">
      <TopHero />
      {/* <Image src={Mascot} alt="A Gnome" width={275} /> */}

      <div className="bg-black text-yellow-400 text-center flex flex-col gap-4 p-4">
        <h3 className={`${metalMania.className} text-4xl`}>
          Welcome metalhead gnome warrior
        </h3>
        <p className=" text-lg">
          Enter the garden of mayhem and behold our brutal gnome collection!
        </p>
      </div>
    </main>
  );
}
