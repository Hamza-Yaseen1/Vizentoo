import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import { postsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(postsQuery);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Vizentoo Blog
          </h1>
          <p className="mt-3 text-gray-600">
            Thoughts, ideas & updates from our team
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post._id}
                href={`/Blog/${post.slug.current}`}
                className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                {post.imageURL && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.imageURL}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Author + Date */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-medium">
                      {post.authorName}
                    </span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-5">
                    {post.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-indigo-600 font-semibold text-sm">
                    Read article
                    <span className="ml-2 transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-500">No posts found.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
