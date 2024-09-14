import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import AddToCartBtn from "./AddToCartBtn";

const Style = ({ item }) => {
  const popularStyleWomen = item.categories.find(
    (item) => item.name === "popular"
  );

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center ">
          {/* Badge */}
          {popularStyleWomen && (
            <div className=" absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}

          <Image
            src={urlFor(item.images[0]).url()}
            width={240}
            height={127}
            objectFit="cover"
            alt=""
          />
        </div>

        {/* btn groub */}

        <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            price_id={item.price_id}
            name={item.name}
            currency="USD"
            description={item.description}
            images={item.images}
            price={item.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${item.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>

      <h5 className="text-gray-400 font-semibold mb-2">
        {item.categories[0].name} Style
      </h5>
      <h4 className="mb-1">{item.name}</h4>
      <div className="text-accent text-lg font-bold">${item.price}</div>
    </div>
  );
};

export default Style;
