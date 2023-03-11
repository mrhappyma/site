import Head from "next/head";
import Header from "../header";

const PostLayout: React.FC<{
  meta: postMetadata;
  children: React.ReactNode[];
}> = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title + " | Dominic Ruggiero"}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-4xl space-y-2.5 p-2">
          <h2 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            {meta.title}
          </h2>
          <p className="drac-text drac-text-lg drac-text-orange">{meta.date}</p>
          {children}
        </main>
      </div>
    </>
  );
};

export default PostLayout;
