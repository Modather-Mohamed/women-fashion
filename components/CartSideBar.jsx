"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckOutBtn from "./CheckOutBtn";

const CartSideBar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left bm-12">
            My Shopping Cart({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <h5 className="text-black/50">Your Cart Is Empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>

        {cartCount > 0 && (
          <div>
            <div className="flex justify-between font-semibold">
              <div className=" uppercase mb-5">Total</div>
              <div>${totalPrice}</div>
            </div>
            <CheckOutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
