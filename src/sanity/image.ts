import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

// Accept `unknown` so callers can pass loosely-typed Sanity image objects;
// the builder validates the shape at runtime.
export function urlForImage(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
