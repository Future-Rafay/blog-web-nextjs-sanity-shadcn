import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getdata } from "@/lib/fetchdata";


export default async function Home() {
  const data = await getdata();

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {data.map((post, idx) => (
          <Card
            key={idx}
            className="rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            {/* Main Image */}
            {post.mainImage?.asset?.url && (
              <Image
                // src={post.mainImage.asset.url}
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || "Blog image"}
                width={500}
                height={300}
                className="object-cover w-full h-48 lg:h-60"
              />
            )}

            <CardContent className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white line-clamp-2 mb-2">
                {post.title}
              </h3>

              {/* Author */}
              <p className="text-sm text-gray-500 dark:text-gray-300">
                By {post.author}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap space-x-2 mt-2">
                {post.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-600 dark:text-blue-100"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Body Preview */}
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 line-clamp-3">
                {post.summery || "Content preview here..."}
              </p>

              {/* Button */}
              <Button
                asChild
                className="mt-6 w-full py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
