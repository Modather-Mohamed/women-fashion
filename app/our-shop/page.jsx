import WomenCategories from "@/components/WomenCategories";
import { client } from "../lib/sanity";

// Get Data
const getData = async () => {
  const query = `*[_type == 'product'] {
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug":slug.current,
    "categories": categories[]-> {
    name
    }
}`;
  const data = await client.fetch(query);
  return data;
};
const page = async () => {
  const item = await getData();

  return (
    <div>
      <WomenCategories item={item} />
    </div>
  );
};

export default page;
