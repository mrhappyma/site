import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";
import {
  getPostData,
  getPosts,
  type postMetadataExtended,
} from "~/utils/posts";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Giscus from "@giscus/react";

/*
    Custom components/renderers to pass to MDX.
    Since the MDX files aren't loaded by webpack, they have no knowledge of how
    to handle import statements. Instead, you must include components in scope
    here.
*/
const components = {};

const post: NextPage<{
  post: postMetadataExtended;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}> = ({ post, mdxSource }) => {
  return (
    <>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Head>
          <title>{post.title + " | Dominic Ruggiero"}</title>
          <meta name="description" content={post.description} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
        </Head>
        <Header />
        <main className="m-3 max-w-4xl space-y-2.5 p-2">
          <h2 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            {post.title}
          </h2>
          <p className="drac-text drac-text-lg drac-text-orange">{post.date}</p>
          <MDXRemote {...mdxSource} components={components} />
          {/* <script
            src="https://giscus.app/client.js"
            data-repo="mrhappyma/site"
            data-repo-id="R_kgDOJBxRXw"
            data-category="Blog Comments"
            data-category-id="DIC_kwDOJBxRX84CVCUS"
            data-mapping="og:title"
            data-strict="1"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="top"
            data-theme="transparent_dark"
            data-lang="en"
            data-loading="lazy"
            crossOrigin="anonymous"
            async
          /> */}
          <Giscus
            host="https://comments.userexe.me"
            repo="mrhappyma/site"
            repoId="R_kgDOJBxRXw"
            category="Blog Comments"
            categoryId="DIC_kwDOJBxRX84CVCUS"
            mapping="og:title"
            reactionsEnabled="1"
            lang="en"
            loading="lazy"
            theme="transparent_dark"
          />
        </main>
      </div>
    </>
  );
};

export default post;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPosts().map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (typeof ctx.params?.id != "string") throw new Error("Invalid ID");

  const post = getPostData(ctx.params.id);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {},
    scope: post,
  });

  return {
    props: {
      post,
      mdxSource,
    },
  };
};
