"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-slate-100">

      {/* Hero Section */}
      <section className="px-4 pt-20 pb-12 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 leading-tight mb-6">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {post.description}
          </p>
        )}

        {/* Author Row */}
        {(post.authorName || post.authorImage) && (
          <div className="mt-8 flex items-center justify-center gap-4">
            {post.authorImage && (
              <Image
                src={builder.image(post.authorImage).width(56).height(56).url()}
                alt={post.authorName}
                width={56}
                height={56}
                className="rounded-full object-cover ring-2 ring-indigo-200"
              />
            )}

            {post.authorName && (
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold">
                {post.authorName}
              </span>
            )}
          </div>
        )}
      </section>

      {/* Featured Image */}
      {post?.mainImage && (
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <Image
              src={builder.image(post.mainImage).width(1400).height(700).url()}
              alt={post?.mainImage?.alt || "Post image"}
              width={1400}
              height={700}
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </section>
      )}

      {/* Content */}
      {post?.body && (
        <section className="px-4 pb-28">
          <article className="
            w-full
            max-w-5xl
            mx-auto
            text-gray-800
            leading-relaxed
            text-base
            sm:text-lg
            md:text-xl
            space-y-10
          ">
            <PortableText value={post.body} />
          </article>
        </section>
      )}

    </main>
  );
};

export default Post;
