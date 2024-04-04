export default function SidebarCategoryTitle({ title }: { title: string }) {
  return (
    <li className="w-full my-4">
      <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60 dark:text-white">
        {title}
      </h6>
    </li>
  );
}
