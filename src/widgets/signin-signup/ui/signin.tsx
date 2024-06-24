import { Checkbox } from '@/components/plate-ui/checkbox';
import { Button, Icon } from '@/shared';
import { InputField } from '@/widgets/signin-signup';
export const SignIn = () => {
  return (
    <div className="flex h-full w-full items-center justify-center px-2">
      {/* Sign in section */}
      <div className="w-full max-w-full flex-col items-center">
        <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h3>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <Button
          className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl hover:cursor-pointer"
          variant="secondary"
        >
          <Icon name="github" size={5} />
          <p className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with GitHub
          </p>
        </Button>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
          <p className="text-base text-gray-600"> or </p>
          <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="mt-2 flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a className="text-sm font-medium text-primary/65" href=" ">
            Forgot Password?
          </a>
        </div>
        <Button className="w-full h-[48px] rounded-xl py-3 text-base font-medium">
          Sign In
        </Button>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
            Not registered yet?
          </span>
          <a
            href="/auth/sign-up/default"
            className="ml-1 text-sm font-medium text-primary/65 hover:to-primary/90"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};
