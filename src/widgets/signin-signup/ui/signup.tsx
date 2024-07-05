'use client';

import { Progress } from '@/shared/ui/progress';
import { EmailAuthForm } from './email-verify-form';
import { useSignupProgressStore } from '@/app/_store/singup-form-progres-store';
import { EmailInputOTPForm } from './email-otp';
import { PassWordForm } from './password-form';

export const SignUp = () => {
  const { step, progress, nextStep } = useSignupProgressStore();

  return (
    <div className="flex h-full w-full items-center justify-center px-2">
      <div className="w-[440px] min-w-[400px] flex-col items-center bg-zinc-900 p-8 rounded-md">
        <h3 className="mb-4 text-4xl font-bold text-primary">Sign Up</h3>
        <Progress value={progress[step]} className="my-4" />
        {step === 'email_auth' && <EmailAuthForm />}
        {step === 'otp' && <EmailInputOTPForm />}
        {step === 'password' && <PassWordForm />}
        <button onClick={nextStep}>버튼</button>
      </div>
    </div>
  );
};
