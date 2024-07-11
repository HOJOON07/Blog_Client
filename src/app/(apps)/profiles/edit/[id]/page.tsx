import ProfilesEdit from '@/_pages/profiles-edit/ui/ProfilesEdit';

export default function Page({ params }: { params: { id: string } }) {
  return <ProfilesEdit params={params} />;
}
