import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { ModeToggle } from '@/components/ui/ModeToggle';
import Link from 'next/link';

export default function Top() {
  return (
    <div className="py-5 flex justify-between">
      <div className="flex items-center font-semibold">
        <Link href="/" className="text-2xl">
          Ho.blog
        </Link>
        <div className="ml-4 rounded-full px-5 py-2 text-xs ring-1 ring-inset ring-cyan-500/50 hover:bg-white/50 hover:ring-black/[0.13] md:ml-8">
          Frontend Developer HoJoon
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Button size="icon" variant="ghost">
          <Icon name="log-in" />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="github" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
