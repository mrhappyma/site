import fs from "fs";
import path from "path";
import matter from "gray-matter";
import z from "zod";

const postsDirectory = path.join(process.cwd(), "posts");

const postMetadata = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
type postMetadata = z.infer<typeof postMetadata>;

const postMetadataExtended = postMetadata.extend({
  content: z.string(),
  id: z.string(),
});
export type postMetadataExtended = z.infer<typeof postMetadataExtended>;

export const getPosts: () => postMetadataExtended[] = () => {
  const filenames = fs.readdirSync(postsDirectory).filter((filename) => {
    return filename.endsWith(".mdx");
  });

  const metadata = filenames.map((filename) => {
    const filepath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filepath, "utf8");
    const { content, data } = matter(fileContents);

    postMetadata.parse(data);
    const meta: postMetadata = data as postMetadata;

    return {
      content,
      ...meta,
      id: filename.replace(/\.mdx$/, ""),
    };
  });

  return metadata;
};

export const getSortedPostsData = (): postMetadataExtended[] => {
  const posts = getPosts();
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getPostData = (id: string) => {
  const posts = getPosts();
  return posts.find((post) => post.id === id)!;
};
