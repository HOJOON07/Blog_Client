import { ForwardRefEditor } from '@/components/editor/ForwardRefEditor';
import '@mdxeditor/editor/style.css';

export default function Home() {
  return <ForwardRefEditor markdown="# 안녕하세요" />;
}
