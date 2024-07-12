import { cn } from '@/shared';
import { error } from 'console';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface UserInputProps {
  placeholder: string;
  name: string;
}
export const UserInput = ({ placeholder, name }: UserInputProps) => {
  const {
    register,
    getValues,
    getFieldState,
    formState: { errors },
  } = useFormContext();
  const defaultValue = getValues(name);
  const fieldState = getFieldState(name);

  return (
    <div
      className={cn(
        `inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary ${
          fieldState.error && 'border-destructive'
        }`,
      )}
    >
      <input
        {...register(name)}
        type="text"
        className={cn(
          `outline-none border-none bg-transparent w-full h-full text-primary ${
            fieldState.error && 'text-destructive'
          }`,
        )}
        placeholder={defaultValue || placeholder}
        name={name}
        disabled={name === 'email' ? true : false}
      />
    </div>
  );
};
