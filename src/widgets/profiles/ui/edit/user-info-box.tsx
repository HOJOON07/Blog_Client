import { UserInput } from './user-input';
interface UserInfoBoxProps {
  title: string;
  mutedText: string;
  placeholder: string;
}
export const UserInfoBox = ({
  title,
  mutedText,
  placeholder,
}: UserInfoBoxProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="font-semibold">{title}</p>
      {/* 데브월드 이름 */}
      <UserInput placeholder={placeholder} />
      <p className="text-sm text-muted-foreground">{mutedText}</p>
    </div>
  );
};
