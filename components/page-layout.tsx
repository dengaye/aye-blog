import AppHead from "./head";
import AppFooter from "./footer";
import AppHeader from "./header";

interface IPageLayoutProps {
  children: any;
}

export default function PageLayout(props: IPageLayoutProps) {
  return (
    <>
      <AppHead />
      <AppHeader />
      <section className="flex flex-col min-h-screen">
        <main className="flex flex-1 pt-12 flex-col h-screen container mx-auto">
          {props.children}
        </main>
        <AppFooter />
      </section>
    </>
  );
}
