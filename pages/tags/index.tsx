import PageLayout from "../../components/page-layout";
import { getAllTags } from "../../services";
import Tag from '../../components/tag'

interface ITagsProps {
  allTags: string[];
}

const Tags = (props: ITagsProps) => {
  const { allTags } = props;

  return (
    <PageLayout>
      <section className="flex mt-3">
        {allTags.map((tag: string, index: number) => (
          <Tag key={index} name={tag} showStyle={true} className={'p-2'} />
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
