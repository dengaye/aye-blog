import Post from "../types/post";
import useRouter from "../hooks/useRouter";

interface IPostCardProps {
  post: Post;
  showTags?: boolean;
}

const PostCard = (props: IPostCardProps) => {
  const { post, showTags = true } = props;
  const { push } = useRouter();

  const toDetail = (slug: string) => push(`/blog/${slug}`);

  const toTags = (e: any, tag: string) => {
    e.stopPropagation();
    push(`/tags/${tag}`);
  };

  return (
    <section
      className="cursor-pointer rounded-md mb-4 p-4 bg-gray-50 transition-all hover:bg-gray-100"
      onClick={() => toDetail(post.slug)}
    >
      <h2 className="text-3xl">{post.title}</h2>
      <p className="text-gray-400 mb-3">{post.date}</p>
      <p className="text-lg mb-2">{post.excerpt}</p>
      {showTags && (
        <section>
          {(post?.tags || []).map((tag: string, index: number) => (
            <span
              key={index}
              className="text-gray-400 pr-3 hover:text-gray-500 cursor-pointer"
              onClick={(e: any) => toTags(e, tag)}
            >
              #{tag}
            </span>
          ))}
        </section>
      )}
    </section>
  );
};

export default PostCard;
