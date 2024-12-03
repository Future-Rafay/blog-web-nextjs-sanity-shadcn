import React from "react";
import Image from "next/image";
import { getFullData } from "@/lib/fetchdata";

export default async function Blog({ params }: { params: { slug: string } }) {
  const data = await getFullData(params.slug);

  if (!data) {
    return (
      <div className="max-w-2xl mx-auto text-center py-10">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
          Blog not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Please check the URL or return to the homepage.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Blog Title */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {data.title}
      </h1>

      {/* Meta Information */}
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
        <p>
          By <span className="font-semibold text-primary">{data.author}</span>
        </p>
        <span>•</span>
        <p>{new Date(data.publishedAt).toLocaleDateString()}</p>
        <span>•</span>
        <p>
          {data.categories?.map((category: string, idx: number) => (
            <span
              key={idx}
              className="bg-secondary text-white py-1 px-3 rounded-lg text-sm"
            >
              {category}
            </span>
          ))}
        </p>
      </div>

      {/* Main Image */}
      {data.mainImage && (
        <Image
          src={data.mainImage.asset.url}
          alt={data.mainImage.alt || "Blog Image"}
          width={1200}
          height={600}
          priority
          className="rounded-lg mb-8 object-cover w-full"
        />
      )}

      {/* Blog Content */}
      <div className="prose dark:prose-invert">
        {data.body?.map((block: any, idx: number) => {
          switch (block._type) {
            case "block":
              // Render text blocks
              return (
                <div key={idx}>
                  {block.style === "blockquote" ? (
                    <blockquote className="border-l-4 pl-4 italic text-gray-700 dark:text-gray-300">
                      {block.children.map((child: any) => child.text).join(" ")}
                    </blockquote>
                  ) : (
                    <p className="mb-4">
                      {block.children.map((child: any) => child.text).join(" ")}
                    </p>
                  )}
                </div>
              );
            case "image":
              // Render images in the body
              return (
                <div key={idx} className="my-6">
                  <Image
                    src={block.asset.url}
                    alt={block.alt || "Content Image"}
                    width={800}
                    height={450}
                    className="rounded-lg"
                  />
                </div>
              );
            default:
              return null; // Handle other custom block types if needed
          }
        })}
      </div>
    </div>
  );
}
