import Top from './components/Top';
import Search from './components/Search';
import Category from './components/Category';

export default function Header() {
  return (
    <header className="sticky top-0 mx-auto">
      <Top />
      <Search />
      <Category />
    </header>
  );
}
