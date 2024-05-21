export const Divider = ({ category }: { category: string }) => {
  return (
    <div className="flex items-center justify-between text-xs text-zinc-400 mt-4 mb-2 font-extralight px-1">
      {category}
    </div>
  );
};
