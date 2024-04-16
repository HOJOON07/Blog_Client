import Nav from '../nav/Nav';
import { PostCardProps } from '../postcard/PostCard';
import PostCard from '../postcard/PostCard';

export default function ContentsWrap() {
  const MOCK_DATE: PostCardProps[] = [
    {
      title: '제목',
      subTitle: '한줄짜리 서브탙이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle:
        '두줄짜리 서브탙이틀두줄짜리 서브탙이틀두줄짜리 서브탙이틀두줄짜리 서브탙이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle:
        '세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀네줄짜리서브타이틀네줄짜리서브타이틀네줄짜리서브타이틀네줄짜리서브타이틀네줄짜리서브타이틀네줄짜리서브타이틀 네줄짜리서브타이틀네줄짜리서브타이틀네줄짜리서브타이틀 asdasdsadsadasdas',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle:
        '네줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리 서브탙이틀 네줄짜리 네줄짜리서브타이틀 네줄짜리서브타이틀네줄짜리서브타이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle: '한줄짜리 서브탙이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle: '한줄짜리 서브탙이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle: '두줄짜리 서브탙이틀두줄짜리 서브탙이틀두줄짜리',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle: '세줄짜리 서브탙이틀세줄짜리 서브탙이틀세줄짜리',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle: '한줄짜리 서브탙이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
    {
      title: '제목',
      subTitle: '한줄짜리 서브탙이틀',
      date: '2024년 3월 16일',
      userName: '김호준',
    },
  ];

  return (
    <main className="relative h-full transition-all duration-200 ease-in-out lg:ml-[250px] rounded-xl bg-slate-50">
      <Nav />
      <div className="grid grid-cols-4 gap-8 mx-6 p-5">
        {MOCK_DATE.map((post, idx) => (
          <PostCard
            key={idx}
            title={post.title}
            subTitle={post.subTitle}
            userName={post.userName}
            date={post.date}
          />
        ))}
      </div>
    </main>
  );
}
