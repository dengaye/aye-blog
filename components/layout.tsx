import cn from 'classnames';

interface ILayoutProps {
  children: any;
  className?: string;
}

const Layout = (props: ILayoutProps) => {
  const { className } = props;
  return <section className={cn('container', 'mx-auto', className)}>{props.children}</section>
};

export default Layout;
