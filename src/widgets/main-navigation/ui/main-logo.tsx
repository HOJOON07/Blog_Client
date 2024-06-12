import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className="text-blue-600 font-bold text-xl cursor-pointer w-[102px]"
    >
      <p>Dev World</p>
    </Link>
  );
};
