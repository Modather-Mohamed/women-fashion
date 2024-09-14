import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full  justify-between mb-4 items-center h-[120px] border-b">
      {/* Image */}

      <div className="w-[110px] h-[110px] relative">
        <Image src={urlFor(item.images[0]).url()} fill alt={item.name} />
      </div>

      {/*name, price, quantity, remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5>{item.name}</h5>
          <button onClick={() => removeItem(item.id)}>
            <FaXmark className="text-sm" />
          </button>
        </div>

        {/* increment , decrement , item price */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button>
              <FaMinus
                className="text-[10px]"
                onClick={() => decrementItem(item.id)}
              />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button>
              <FaPlus
                className="text-[10px]"
                onClick={() => incrementItem(item.id)}
              />
            </button>
          </div>

          <div className="font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
