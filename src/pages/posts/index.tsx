import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/header";
import { getSortedPostsData, type postMetadataExtended } from "~/utils/posts";

const PostsList: NextPage<{ allPosts: postMetadataExtended[] }> = ({
  allPosts,
}) => {
  return (
    <>
      <Head>
        <title>Posts | Dominic Ruggiero</title>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main>
          <ul className="m-2 rounded-sm p-3">
            {allPosts.map(({ id, date, title, description }) => (
              <Link href={`/posts/${id}`} key={id}>
                <li className="drac-bg-purple m-1 rounded-md border-2 border-[#bd93f9] p-2 transition-all duration-200 hover:bg-transparent">
                  <h3 className="text-xl">{title}</h3>
                  <p>{description}</p>
                  <p className="text-xs">{date}</p>
                </li>
              </Link>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getSortedPostsData();

  return {
    props: {
      allPosts,
    },
  };
};

export default PostsList;
