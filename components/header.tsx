import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

interface INavLink {
  path: string;
  value: string;
}

const NavLinks = [
  { path: "/", value: "首页" },
  { path: "/blog", value: "博客" },
  { path: "/tags", value: "标签" },
];

const AppHeader = () => {
  const { pathname } = useRouter();

  const isActive = (path: string) => {
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 w-screen border-b bg-white z-10">
      <section
        className={"container mx-auto h-12 flex justify-center items-center"}
      >
        <Link href="/">
          <a className="text-2xl">AYE BLOG</a>
        </Link>

        <nav className="flex items-center text-lg">
          {NavLinks.map((item: INavLink) => (
            <section
              className={cn("pl-10", isActive(item.path) && "text-blue-500")}
              key={item.value}
            >
              <Link href={item.path}>{item.value}</Link>
            </section>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default AppHeader;
