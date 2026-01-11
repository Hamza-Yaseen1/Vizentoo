"use client";

import { useState, useMemo, useTransition } from "react";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

interface BlogPageClientProps {
  posts: SanityDocument[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"recent" | "older">("recent");
  const [isPending, startTransition] = useTransition();

  const filteredPosts = useMemo(() => {
    let result = [...posts];
    if (filter === "recent") {
      result.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      );
    } else {
      result.sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() -
          new Date(b.publishedAt).getTime()
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, filter, search]);

  return (
    <>
      {/* Loader Overlay */}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
        </div>
      )}

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex gap-3">
          <button
            onClick={() => setFilter("recent")}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === "recent"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setFilter("older")}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === "older"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Older
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <Link
            key={post._id}
            href={`/Blog/${post.slug.current}`}
            onClick={() => startTransition(() => {})}
            className="group relative rounded-2xl overflow-hidden border bg-white hover:shadow-2xl transition"
          >
            {post.imageURL && (
              <div className="h-44 overflow-hidden">
                <img
                  src={post.imageURL}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex justify-between text-xs text-gray-500 mb-3">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                  {post.authorName}
                </span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-2 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-3 mb-5">
                {post.description}
              </p>

              <span className="text-indigo-600 font-semibold text-sm">
                Read article →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
