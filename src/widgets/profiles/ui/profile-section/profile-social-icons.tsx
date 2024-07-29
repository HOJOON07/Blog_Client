'use client';
import { IconList } from '@/shared';
import { SocialInfoIcon } from './social-info-icon';
import { SocialIconsDialog } from './social-icons-dialog';

interface SocialLinks {
  github: string | null;
  instagram: string | null;
  linkedin: string | null;
  socialEmail: string | null;
  socialLink: string | null;
}

interface SocialLinksProps {
  socials: SocialLinks;
}
export const SocialIcons = ({ socials }: SocialLinksProps) => {
  return (
    <div className="flex gap-2">
      {Object.entries(socials).map(([iconKey, value]) =>
        value ? (
          <SocialIconsDialog
            key={iconKey}
            name={iconKey as IconList}
            src={value}
          />
        ) : null,
      )}
    </div>
  );
};
