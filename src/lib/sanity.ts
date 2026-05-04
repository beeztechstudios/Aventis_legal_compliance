import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-20",
  useCdn: false, // Set to true for production to cache responses
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
