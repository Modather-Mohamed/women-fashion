"use client";

import Link from "next/link";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";

import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[26px] text-accent">Elhdad</h1>
        </Link>

        {/* nav */}
        <div className="flex items-center gap-[10px]">
          <Nav containerStyles="flex gap-[20px]" />
          <div
            className="relative cursor-pointer"
            onClick={() => handleCartClick()}
          >
            <CgShoppingBag className="text-[26px]" />
            <div className=" absolute bg-accent w-[18px] h-[18px] rounded-full -right-1 -bottom-1 text-white flex justify-center items-center text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
