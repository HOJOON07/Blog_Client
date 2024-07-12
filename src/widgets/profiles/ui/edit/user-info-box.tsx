import { ReactNode } from 'react';
import { UserInput } from './user-input';
import { useFormContext } from 'react-hook-form';
interface UserInfoBoxProps {
  title: string;
  mutedText: string;
  placeholder: string;
  name: string;
  children?: ReactNode;
}
export const UserInfoBox = ({
  title,
  mutedText,
  placeholder,
  name,
  children,
}: UserInfoBoxProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="font-semibold">{title}</p>
      {/* 데브월드 이름 */}
      <UserInput placeholder={placeholder} name={name} />
      <div className="flex w-full items-center">
        {errors[name] ? (
          <p className="text-sm text-red-500">{errorMessage}</p>
        ) : (
          <p className="text-sm text-muted-foreground">{mutedText}</p>
        )}
        {children}
      </div>
    </div>
  );
};
