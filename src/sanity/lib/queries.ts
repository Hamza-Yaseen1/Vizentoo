import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
    "authorImage": author->image

}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id,
    title,
    description,
    mainImage,
    body,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image

  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;