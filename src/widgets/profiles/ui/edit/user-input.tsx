interface UserInputProps {
  placeholder: string;
  name: string;
}
export const UserInput = ({ placeholder, name }: UserInputProps) => {
  return (
    <div className="inline-flex items-center rounded-lg border border-solid text-sm h-12 px-3 relative w-full text-zinc-400 focus-within:border-primary">
      <input
        type="text"
        className="outline-none border-none bg-transparent w-full h-full"
        maxLength={150}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
