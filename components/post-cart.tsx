import Post from "../types/post";
import useRouter from "../hooks/useRouter";
import Tag from "../components/tag";

interface IPostCardProps {
  post: Post;
  showTags?: boolean;
}

const PostCard = (props: IPostCardProps) => {
  const { post, showTags = true } = props;
  const { push } = useRouter();

  const toDetail = (slug: string) => push(`/blog/${slug}`);

  return (
    <section
      className="cursor-pointer rounded-lg mb-4 p-4 bg-white transition-all hover:bg-gray-100 hover:shadow-inner"
      onClick={() => toDetail(post.slug)}
    >
      <h2 className="text-3xl">{post.title}</h2>
      <p className="text-gray-400 mb-3">{post.date}</p>
      <p className="text-lg mb-2">{post.excerpt}</p>
      {showTags && (
        <section>
          {(post?.tags || []).map((tag: string, index: number) => (
            <Tag key={index} name={tag} showStyle />
          ))}
        </section>
      )}
    </section>
  );
};

export default PostCard;
