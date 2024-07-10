'use client';
import { IconList } from '@/shared';
import { SocialInfoIcon } from './social-info-icon';

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
      {Object.entries(socials).map(([key, value]) =>
        value ? (
          <SocialInfoIcon name={key as IconList} href={value} key={key} />
        ) : null,
      )}
    </div>
  );
};
