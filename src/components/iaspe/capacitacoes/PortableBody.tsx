import { PortableText, type PortableTextComponents } from "next-sanity";
import { urlForImage } from "@/sanity/image";

// Renders a course's rich `corpo` content with theme-friendly typography.
const components: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-700 text-dark text-22 mt-4 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-700 text-dark text-18 mt-3 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-left border-4 border-base-light pl-3 text-muted my-3">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-15 text-500 mb-3">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-3 pl-4">{children}</ul>,
    number: ({ children }) => <ol className="mb-3 pl-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-15 text-500 mb-1">{children}</li>,
    number: ({ children }) => <li className="text-15 text-500 mb-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="link-underline text-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={urlForImage(value).width(900).auto("format").url()}
          alt={value?.alt ?? ""}
          className="img-fluid rounded my-3"
        />
      ) : null,
  },
};

export default function PortableBody({ value }: { value: unknown }) {
  if (!Array.isArray(value)) return null;
  return <PortableText value={value} components={components} />;
}
