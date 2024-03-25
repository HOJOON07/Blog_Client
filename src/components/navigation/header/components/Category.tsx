import Image from 'next/image';

interface CategoryType {
  title?: string;
  src: string;
  alt: string;
}
const CATEGORY: CategoryType[] = [
  { title: '리액트', src: '/icons/React.svg', alt: '리액트' },
  { title: '넥스트', src: '/icons/Next.svg', alt: '넥스트' },
  { title: '네스트', src: '/icons/Nest.svg', alt: '네스트' },
  { title: '도커', src: '/icons/Docker.svg', alt: '도커' },
  { title: '자바스크립트', src: '/icons/JavaScript.svg', alt: '자바스크립트' },
  { title: '타입스크립트', src: '/icons/TypeScript.svg', alt: '타입스크립트' },
  { title: '알고리즘', src: '/icons/Algorithm.svg', alt: '알고리즘' },
  { title: '더보기', src: '/icons/More.svg', alt: '더보기' },
];

export default function Category() {
  return (
    <li className="w-[640px] mx-auto flex items-center mt-4 justify-between lg:w-[550px]">
      {CATEGORY.map((category) => (
        <div className="h-11 mb-2" key={category.title}>
          <Image width={44} height={44} src={category.src} alt={category.alt} />
        </div>
      ))}
    </li>
  );
}
