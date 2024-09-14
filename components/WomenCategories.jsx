"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Style from "./Style";

const WomenCategories = ({ item }) => {
  const [category, setCategory] = useState("all");
  const [filterStyles, setFilterStyles] = useState([]);
  const [price, setPrice] = useState(230);

  useEffect(() => {
    const filtered = item.filter((x) => {
      const categoryMatch =
        category === "all"
          ? item
          : x.categories.some((categ) => categ.name === category);
      const priceMatch = x.price <= price;
      return categoryMatch && priceMatch;
    });

    setFilterStyles(filtered);
  }, [category, price, item]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Sidebar */}
          <aside className=" w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            {/* Price Slider */}
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price{" "}
                <span className="text-accent font-semibold ml-2">{price}</span>
                <span className="ml-2">
                  {filterStyles.length > 1
                    ? `${filterStyles.length} items`
                    : filterStyles === 0
                      ? `${filterStyles.length} items`
                      : `${filterStyles.length} items`}
                </span>
              </div>

              {/* Slider */}
              <Slider
                defaultValue={[230]}
                max={170}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          {/* Style List */}
          <div className=" w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filterStyles.map((item) => {
                return <Style item={item} key={item.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenCategories;
