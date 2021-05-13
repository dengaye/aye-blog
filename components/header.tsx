import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

interface INavLink {
  path: string;
  value: string;
}

const NavLinks = [
  { path: "/", value: "Home" },
  { path: "/blog", value: "Blog" },
  { path: "/about", value: "About" },
];

const AppHeader = () => {
  const { pathname } = useRouter();
  return (
    <header className="fixed top-0 left-0 w-screen border-b">
      <section className={'container mx-auto h-12 flex justify-center items-center'}>
        <Link href="/"><a className="text-2xl">Aye Blog</a></Link>

        <ul className="flex items-center text-lg">
          {NavLinks.map((item: INavLink) => (
            <li
              className={cn('pl-10', pathname === item.path && 'text-blue-500')}
              key={item.value}
            >
              <Link href={item.path}>
                <a>{item.value}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default AppHeader;
