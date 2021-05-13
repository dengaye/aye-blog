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
      <main className="flex items-center justify-center py-12 flex-col h-screen">
        {props.children}
      </main>
      <AppFooter />
    </>
  );
}
