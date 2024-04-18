import clsx from 'clsx';

interface Props {
  title: string;
  expand: boolean;
}

export default function SidebarCategoryTitle({ title, expand }: Props) {
  return (
    <li className={clsx(`w-full my-4`)}>
      <h6
        className={clsx(
          `pl-4 ml-2 text-xs font-bold leading-tight uppercase opacity-60 dark:text-white`,
        )}
      >
        {title}
      </h6>
    </li>
  );
}
