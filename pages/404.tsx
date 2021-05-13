import Link from 'next/link';
import Layout from "../components/layout";
import AppFooter from "../components/footer";
import s from "../styles/404.module.scss";

export default function NotFount() {
  return (
    <Layout className={s.container}>
      <section className={s.content}>
        <h1>404</h1>
        <p>This page does not exist.</p>
        <Link href="/"><a>Return to Home Page</a></Link>
      </section>
      <AppFooter />
    </Layout>
  );
}
