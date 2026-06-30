"use client";

/**
 * Client boundary for the embedded Studio. Importing `sanity.config` (and thus
 * `sanity`) here — inside a Client Component — keeps it out of the React Server
 * Component graph. That avoids the `react-server` export condition resolving
 * `swr` to a build without a default export, which breaks the server build.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function Studio() {
  return <NextStudio config={config} />;
}
