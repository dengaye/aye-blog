import { GetStaticPropsResult } from "next";
import PageLayout from "../../components/page-layout";
import { getAllPostsByTag, getAllTags } from "../../services";
import PostType from "../../types/post";
import PostCart from "../../components/post-cart";

interface ITagDetailProps {
  allPosts: PostType[];
}

const TagDetail = (props: ITagDetailProps) => {
  const { allPosts } = props;

  return (
    <PageLayout>
      <section className="mt-3">
        {allPosts.map((post: PostType, index: number) => (
          <PostCart key={index} post={post} showTags={false} />
        ))}
      </section>
    </PageLayout>
  );
};

export default TagDetail;

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<ITagDetailProps>> {
  const allPosts: PostType[] = getAllPostsByTag(params.tag, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: {
      allPosts,
    },
  };
}

export async function getStaticPaths() {
  const allTags = getAllTags();

  return {
    paths: allTags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
}
