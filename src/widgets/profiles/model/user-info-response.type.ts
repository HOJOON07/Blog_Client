import { TElement } from '@udecode/plate-common';

type UserRole = 'user' | 'admin';

export interface getUserInfoApiResponseType {
  id: number;
  email: string;
  devName: string;
  role: UserRole;
  position: string | null;
  bio: string | null;
  location: string | null;
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
  socialEtc: string | null;
  readme: TElement[] | null;
  followerCount: number;
  followeeCount: number;
  image: string | null;
}
