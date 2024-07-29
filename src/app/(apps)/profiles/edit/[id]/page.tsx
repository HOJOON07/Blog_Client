import { ProfilesEdit } from '@/widgets/profiles-edit';

export default function Page({ params }: { params: { id: string } }) {
  return <ProfilesEdit params={params} />;
}
