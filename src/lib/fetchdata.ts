import { client } from "@/sanity/lib/client";

interface simpleBlogCard {
    title: string;
    publishedAt: string;
    summery : string,
    mainImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
    currentSlug: string;
    body: Array<{
      _key: string;
      _type: string;
      style: string;
      children: Array<{
        _key: string;
        _type: string;
        text: string;
      }>;
    }>;
    author: string; // Assuming you are storing the author's name as a string
    categories: string[]; // Categories as an array of strings (titles)
  }
  
export async function getdata(): Promise<simpleBlogCard[]> {
    const query = `
      *[_type == 'post'] | order(_createdAt desc) {
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
          markDefs[],
          children[] {
            ...,
            _key
          }
        },
        "author": author->name,
        "categories": categories[]->title
      }
    `;
    const data: simpleBlogCard[] = await client.fetch(query);
    return data;
}

export async function getFullData(slug: string) {
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
