import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return buildMetadata("Post not found", "This post does not exist.", `/blog/${params.slug}`);
  }

  return buildMetadata(post.title, post.excerpt || post.title, `/blog/${post.slug}`);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <article className="section-space">
      <div className="container-shell max-w-3xl">
        <p className="text-sm text-brand-ocean">{post.date}</p>
        <h1 className="mt-2 text-4xl">{post.title}</h1>
        <div className="prose prose-slate mt-8 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
