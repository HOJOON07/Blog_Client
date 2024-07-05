export const ProfileTabs = () => {
  return (
    <div className="flex border-b">
      <div className="py-3 px-4 border-b border-primary">
        <p className="text-primary text-sm font-semibold">Overview</p>
      </div>
      <div className="py-3 px-4">
        <p className="text-zinc-500 text-sm font-semibold">Articles</p>
      </div>
      <div className="py-3 px-4">
        <p className="text-zinc-500 text-sm font-semibold">Stars</p>
      </div>
      <div className="py-3 px-4">
        <p className="text-zinc-500 text-sm font-semibold">BookMarks</p>
      </div>
    </div>
  );
};
