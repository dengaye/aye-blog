import PageLayout from "../../components/page-layout";
import { getAllTags } from "../../services";
import useRouter from "../../hooks/useRouter";

interface ITagsProps {
  allTags: string[];
}

const Tags = (props: ITagsProps) => {
  const { allTags } = props;
  const { push } = useRouter();

  const toDetailTag = (tag: string) => push(`/tags/${tag}`);

  return (
    <PageLayout>
      <section className="flex mt-3">
        {allTags.map((tag: string, index: number) => (
          <span
            key={index}
            className="p-3 cursor-pointer shadow-inner mx-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all hover:text-opacity-10"
            onClick={() => toDetailTag(tag)}
          >
            #{tag}
          </span>
        ))}
      </section>
    </PageLayout>
  );
};

export default Tags;

export const getStaticProps = async () => {
  const allTags = getAllTags();

  return {
    props: { allTags },
  };
};
