import { Button } from '@/shared';
import Link from 'next/link';

export const NewPost = () => {
  return (
    <Button variant="outline" className="hover:border-emerald-500">
      <Link href="/workspace">새 글 작성</Link>
    </Button>
  );
};
