export interface simpleBlogCard {
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
  