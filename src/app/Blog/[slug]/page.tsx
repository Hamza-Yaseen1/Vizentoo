import { type SanityDocument } from "next-sanity";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Post from "@/app/Components/Post";

export const revalidate = 60;

export async function generateStaticParams() {
    const posts = await client.fetch(postPathsQuery);
    return posts;
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params: { slug }
    });

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params: { slug }
    });

    if (!post) {
        notFound();
    }

    return <Post post={post} />;
};

export default PostPage;