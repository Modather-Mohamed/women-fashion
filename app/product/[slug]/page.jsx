import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

// import icons
import { Clock, PackageCheck, RefreshCcw, ChevronLeft } from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
        _id, 
          images,
          price,
          price_id,
          name,
          description,
          "slug":slug.current,
          "category": categories->{name}
      }`;

  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const item = await getData(params.slug);
  console.log(item);

  return (
    <section style={{ paddingTop: "96px", paddingBottom: "128px" }}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* image */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(item.images[0]).url()}
              width={473}
              height={290}
              priority
              alt=""
            />
          </div>

          {/* text */}
          <div className=" flex-1 flex flex-col justify-center items-start gap-10">
            <Link href={"/"} className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back To Home
            </Link>

            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{item.name}</h3>
                <p className="text-lg font-semibold">${item.price}</p>
              </div>
              <p>{item.description}</p>
            </div>

            {/* info */}

            <div className=" flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free Shipping On Orders Over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCcw size={20} className="text-accent" />
                <p>Free Return For 30 Days</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
