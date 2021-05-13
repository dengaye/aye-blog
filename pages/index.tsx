import { useRouter } from 'next/router';
import PageLayout from "../components/page-layout";
import { getAllPosts } from "../services";
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

export default function Home(props: Props) {
  const router = useRouter();
  const { allPosts = [] } = props;

  const toDetail = (slug: string) => router.push(`/blog/${slug}`);

  return <PageLayout>
    {allPosts.map((post: Post, index: number) => (
      <section key={index} onClick={() => toDetail(post.slug)} className="cursor-pointer">
        <section>{post.title}</section>
        <section>{post.date}</section>
        <section>{post.excerpt}</section>
      </section>
    ))}
  </PageLayout>;
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
