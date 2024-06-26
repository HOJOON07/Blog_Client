import { Icon, IconList } from '@/shared';
import { UserInput } from '@/widgets/profiles';

interface SocialInfoBoxProps {
  icon: IconList;
  placeholder: string;
}

export const SocialInfoBox = ({ icon, placeholder }: SocialInfoBoxProps) => {
  return (
    <div className="w-full flex gap-2">
      <div className="flex items-center justify-center">
        <Icon name={icon} size={5} />
      </div>
      <UserInput placeholder={placeholder} />
    </div>
  );
};
