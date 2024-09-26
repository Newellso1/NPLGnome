"use client";

import Link from "next/link";
import { useState } from "react";
import { faBars, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <nav className="flex justify-between p-4 bg-yellow-400">
        <Link href="/">NPL Gnome</Link>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </nav>
    </div>
  );
}
