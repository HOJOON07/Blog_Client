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

{
  /* <div className="relative flex">
      <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
          <SignIn />
        </div>
      </div>
    </div> */
}
