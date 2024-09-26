"use client";
import Image from "next/image";
import Mascot from "@/public/images/Mascot.png";
import MenuLink from "./Menu-Link";
import MenuButton from "./Menu-button-2";

export default function Menu({ openMenu, setOpenMenu }) {
  const closeMenu = () => {
    setTimeout(() => {
      setOpenMenu(false);
    }, 300);
  };

  return (
    <div
      className={`flex flex-col fixed inset-0 justify-between  h-full w-full bg-yellow-400 transition-all ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div onClick={() => setOpenMenu(!openMenu)}>
        <MenuButton />
      </div>
      <div className="flex justify-center text-center mt-32">
        <ul className="flex flex-col gap-3 items-center">
          <MenuLink link="Home" destination="/" onClick={closeMenu} />
          <MenuLink link="Store" destination="/store" onClick={closeMenu} />
          <MenuLink link="Contact" destination="/contact" onClick={closeMenu} />
        </ul>
      </div>
      <div className="">
        <Image src={Mascot} alt="NPL Gnome Mascot" />
      </div>
    </div>
  );
}
