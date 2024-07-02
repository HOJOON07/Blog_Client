'use client';
import { Checkbox } from '@/components/plate-ui/checkbox';
import { Button, Icon } from '@/shared';
import { useForm } from 'react-hook-form';

import { Progress } from '@/shared/ui/progress';
import { useState } from 'react';
import { EmailAuthForm } from './email-verify-form';
import { useSignupStore } from '@/app/_store/singup-form-progres-store';
import { EmailInputOTPForm } from './email-otp';
import { PassWordForm } from './password-form';

export const SignUp = () => {
  const { step, progress, nextStep } = useSignupStore();

  return (
    <div className="flex h-full w-full items-center justify-center px-2">
      <div className="w-full max-w-full flex-col items-center">
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
