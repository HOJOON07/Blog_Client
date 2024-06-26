import { SignIn } from '@/widgets/signin-signup';

export default function SignInPage() {
  return (
    <div className="max-w-[1000px] h-screen w-full m-auto">
      <div className="mx-auto flex px-5 w-[50%] h-full">
        <SignIn />
      </div>
    </div>
  );
}
