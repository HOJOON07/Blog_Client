import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function Profile() {
  return (
    <div className="flex items-center py-4 gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <div>
        <p className="text-xs text-gray-400 font-semibold">Good Day👏</p>
        <p className="text-lg font-bold">김호준</p>
      </div>
    </div>
  );
}
