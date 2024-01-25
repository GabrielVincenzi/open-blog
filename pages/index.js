import Head from "next/head";
import { PostCard, PostWidget, Categories } from "@/components";
import { getPosts } from "@/services";
import { FeaturedPosts } from "@/sections";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Open Ball Blog</title>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) =>
            <PostCard post={post.node} key={post.title} />
          ).reverse()}

        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>


    </div>
  );
};

// Use a special Next.js way to fetch data directly.
// New async function to do so with or (||) for no resutls.
// Then use this posts as props in the component Home.
export async function getStaticProps() {
  const posts = await getPosts() || [];

  return {
    props: { posts },
    revalidate: 10,
  }
}