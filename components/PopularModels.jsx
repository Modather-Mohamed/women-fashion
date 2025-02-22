import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularModelsCarousel from "./PopularModelsCarousel";

// Get Data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug":slug.current,
    "categories":categories [] -> {
    name
    }
}`;
  const data = await client.fetch(query);

  return data;
};

const Popular = async () => {
  const popularProducts = await getData();
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Women Styliesh</h2>
        <p className="text-center mb-[30px]">
          The World's Premuim Brands In One Destination.
        </p>

        {/* Carousel */}
        <div>
          <PopularModelsCarousel popularProducts={popularProducts} />
        </div>

        <Link href="./our-shop">
          <button className="btn btn-accent mx-auto ">
            See All Collections
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Popular;
