import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getAllPostIds, getPostData } from "utils/posts";
import Header from "~/components/header";

const BlogPost: NextPage<{
  postData: { id: string; title: string; date: string };
}> = (props) => {
  return (
    <>
      <Head>
        <title>{props.postData.title} | Dominic Ruggiero</title>
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-4xl space-y-2.5 p-2">
          <h2 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            {props.postData.title}
          </h2>
          <p className="drac-text drac-text-lg drac-text-orange">
            {props.postData.date}
          </p>
        </main>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = (ctx) => {
  if (typeof ctx.params?.id != "string") throw new Error("Invalid ID");

  const postData = getPostData(ctx.params.id);
  return {
    props: {
      postData,
    },
  };
};

export default BlogPost;
