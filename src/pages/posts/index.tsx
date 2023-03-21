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
        <link rel="icon" href="/favicon.gif" type="image/gif" />
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main>
          <ul className="m-2 rounded-sm p-3">
            {allPosts.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`} key={id}>
                <li className="drac-bg-purple m-1 rounded-md p-2 transition-all hover:p-3">
                  {title}
                  <br />
                  {date}
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
