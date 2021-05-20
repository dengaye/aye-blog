import { GetStaticPropsResult } from "next"
import PageLayout from "../../components/page-layout"
import { getAllPostsByTag, getAllTags } from "../../services"
import PostType from "../../types/post"
import PostCart from "../../components/post-cart"
import Tag from '../../components/tag';

interface ITagDetailProps {
  allPosts: PostType[];
  tag: string;
}

const TagDetail = (props: ITagDetailProps) => {
  const { allPosts } = props;

  return (
    <PageLayout>
      <section className="mt-3">
        <Tag name={props.tag} showStyle className="mb-3 py-1"/>
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
      tag: params.tag,
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
