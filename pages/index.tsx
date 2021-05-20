import PageLayout from "../components/page-layout";
import { getAllPosts } from "../services";
import Post from "../types/post";
import PostCart from "../components/post-cart";
import useRouter from "../hooks/useRouter";

type Props = {
  allPosts: Post[];
};

export default function Home(props: Props) {
  const { allPosts = [] } = props;
  const { push } = useRouter();

  const toBlog = () => push("/blog");

  return (
    <PageLayout>
      <section className="mt-5 p-6 bg-white rounded-lg h-full">
        <section className="text-lg mb-2 pl-4">最新文章</section>
        {allPosts.map((post: Post, index: number) => (
          <PostCart key={index} post={post} />
        ))}
        <section
          className="transition-all inline-block rounded-lg ml-2 p-2 cursor-pointer hover:bg-gray-100 hover:shadow-inner"
          onClick={toBlog}
        >
          查看更多......
        </section>
      </section>
    </PageLayout>
  );
}

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
