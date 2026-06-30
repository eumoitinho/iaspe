/**
 * Embedded Sanity Studio, mounted under the `/studio` route segment.
 * The Studio itself lives in the `Studio` client component so that `sanity`
 * stays out of the RSC graph. Config: `web/sanity.config.ts`.
 *
 * Docs: https://www.sanity.io/docs/nextjs/embedding-sanity-studio-in-nextjs
 */
import Studio from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
