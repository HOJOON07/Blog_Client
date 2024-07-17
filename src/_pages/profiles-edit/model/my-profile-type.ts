export interface MyProfileType {
  bio: string | null;
  devName: string | null;
  email: string | null;
  id: number | null;
  instagram: string | null;
  linkedin: string | null;
  location: string | null;
  position: string | null;
  role: string;
  socialEtc: string | null;
  github: string | null;
}

export const UserInitialState: MyProfileType = {
  bio: null,
  devName: null,
  email: null,
  id: null,
  instagram: null,
  linkedin: null,
  location: null,
  position: null,
  role: 'User',
  socialEtc: null,
  github: null,
};
