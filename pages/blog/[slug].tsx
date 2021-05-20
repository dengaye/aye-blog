import { GetStaticPropsResult } from "next";
import PageLayout from "../../components/page-layout";
import { getAllPosts, getPostBySlug } from "../../services";
import PostType from "../../types/post";
import markdownToHtml from "../../utils/markdownToHtml";
import Tag from "../../components/tag";

interface IBlogDetailProps {
  post: PostType;
}

const BlogDetail = (props: IBlogDetailProps) => {
  const {
    post: { content, title, date, tags },
  } = props;

  return (
    <PageLayout>
      <section className="bg-white h-full p-6 my-4 rounded-md">
        <section className="text-3xl pb-2 font-bold">
          {title}
          <p className="text-sm font-light text-gray-500 pt-1">
            发表于 {date}
          </p>
        </section>
        <section className="mb-6">
          {tags.map((tag: string, index: number) => (
            <Tag key={index} name={tag} showStyle={true} />
          ))}
        </section>
        <article
          className="prose prose-sm mx-auto prose-indigo w-full max-w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    </PageLayout>
  );
};

export default BlogDetail;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<IBlogDetailProps>> {
  const post: any = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
