import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }

    if (data[field] && field === "tags") {
      items[field] = data[field].split(",");
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getAllTags = () => {
  const slugs = getPostSlugs();
  
  const posts = slugs.map((slug) => getPostBySlug(slug, ['tags']));
  const allTags: any = posts.map((post) => {
    return post.tags
  })
  const filterTags = [...new Set(allTags.flat())]
  return filterTags
};


export const getAllPostsByTag = (tag: string, fields: string[] = []) => {
  const posts = getAllPosts(fields)
  const result: any = []
  posts.map(post => {
    if (post?.tags && post.tags.includes(tag)) {
      result.push(post)
    }
  })
  return result
}