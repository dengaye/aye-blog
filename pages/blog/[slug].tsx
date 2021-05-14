import { GetStaticPropsResult } from "next";
import PageLayout from "../../components/page-layout";
import { getAllPosts, getPostBySlug } from "../../services";
import PostType from "../../types/post";
import markdownToHtml from "../../utils/markdownToHtml";

interface IBlogDetailProps {
  post: PostType;
}

const BlogDetail = (props: IBlogDetailProps) => {
  const {
    post: { content, title, date },
  } = props;

  return (
    <PageLayout>
      <section className="text-center text-3xl py-5 font-bold">
        {title} <p className="text-center text-sm font-light text-gray-500 pt-1">发表于 {date}</p>
      </section>

      <article
        className="prose max-w-none prose-sm mx-auto prose-indigo"
        dangerouslySetInnerHTML={{ __html: content }}
      />
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
