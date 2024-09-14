import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "am26epxn",
  dataset: "production",
  apiVersion: "2024-09-14",
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);
export function urlFor(source) {
  return imgBuilder.image(source);
}
