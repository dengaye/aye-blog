import PageLayout from "../../components/page-layout";
import Post from "../../types/post";
import { getAllPosts } from "../../services";
import PostCart from "../../components/post-cart";

type Props = {
  allPosts: Post[];
};

const Blog = (props: Props) => {
  const { allPosts = [] } = props;
  return (
    <PageLayout>
      <section className="mt-5 p-6 bg-white rounded-lg h-full">
        {allPosts.map((post: Post, index: number) => (
          <PostCart key={index} post={post} />
        ))}
      </section>
    </PageLayout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
