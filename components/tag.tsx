import cn from "classnames";
import useRouter from "../hooks/useRouter";

const tagColorMaps: any = {
  Git: 'bg-yellow-400 text-white',
  MacBook: 'bg-gray-300',
  default: 'bg-white text-gray-700'
}

interface ITagProps {
  name: string;
  showStyle?: boolean;
  className?: string;
}

const Tag = (props: ITagProps) => {
  const { name, showStyle } = props;
  const { push } = useRouter();
  const toTags = (e: any, tag: string) => {
    e.stopPropagation();
    push(`/tags/${tag}`);
  };

  return (
    <span
      className={cn(
        "cursor-pointer inline-block mr-3 transition-all",
        !showStyle && "text-gray-400 hover:text-gray-500",
        showStyle && `px-2 rounded-md ${tagColorMaps[name] || tagColorMaps.default} shadow-inner`,
        props.className
      )}
      onClick={(e: any) => toTags(e, name)}
    >
      #{name}
    </span>
  );
};

export default Tag;
