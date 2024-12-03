import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type == 'post' && slug.current == '${slug}'] {
      title,
      "currentSlug": slug.current,
      publishedAt,
       summery,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      body[] {
        ...,
        markDefs[] {
          ...,
        },
        children[] {
          ...,
          _key
        }
      },
      "author": author->name,
      "categories": categories[]->title
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

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
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
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
              className="bg-secondary text-secendory py-1 px-2 rounded-lg"
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
      <div className="prose dark:prose-dark max-w-none prose-headings:font-bold prose-h1:text-primary prose-h2:text-secondary prose-blockquote:border-primary prose-a:text-primary hover:prose-a:underline">
      {data.body?.map((block: any, idx: number) => {
          if (block._type === "block") {
            return (
              <p key={idx} className="">
                {block.children.map((child: any) => child.text).join(" ")}
              </p>
            );
          }
          return null; // Handle other block types as needed
        })}
      </div>
    </div>
  );
}
