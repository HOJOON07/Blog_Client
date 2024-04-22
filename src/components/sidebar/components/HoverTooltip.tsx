interface Props {
  title: string;
  expand: boolean;
}
export default function HoverTooltip({ title }: Props) {
  return (
    <div className="flex items-center justify-center bg-slate-200 z-50 rounded-md p-2">
      <p>{title}</p>
    </div>
  );
}
