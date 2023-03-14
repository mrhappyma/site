/* eslint-disable @typescript-eslint/no-var-requires */
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/pages/posts");

export function getSortedPostsData(): postMetadataWithId[] {
  const filenames = fs.readdirSync(postsDirectory).filter((filename) => {
    return filename.endsWith(".mdx");
  });

  const metadata = filenames.map((filename) => {
    const filepath = path.join(postsDirectory, filename);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { meta }: { meta: postMetadata } = require(`${filepath}`);

    return {
      id: filename.replace(/\.mdx$/, ""),
      ...meta,
    };
  });

  return metadata;
}
