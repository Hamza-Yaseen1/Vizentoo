import { type SanityDocument } from "next-sanity";
import BlogPageClient from "./BlogPageClient";
import { postsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const revalidate = 60; // Works here because this is server component

export default async function BlogPage() {
  const posts: SanityDocument[] = await client.fetch(postsQuery);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Vizentoo Blog</h1>
          <p className="mt-3 text-gray-600">
            Thoughts, ideas & updates from our team
          </p>
        </div>

        {/* Client Component */}
        <BlogPageClient posts={posts} />
      </div>
    </main>
  );
}
