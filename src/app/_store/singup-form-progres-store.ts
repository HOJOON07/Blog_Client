import { create } from 'zustand';

type SignupStep = 'email_auth' | 'otp' | 'password';

interface State {
  step: SignupStep;
  progress: Record<SignupStep, number>;
}

interface Actions {
  setStep: (step: SignupStep) => void;
  setProgress: (step: SignupStep, value: number) => void;
  nextStep: () => void;
  resetStep: () => void;
}

const initialState: State = {
  step: 'email_auth',
  progress: {
    email_auth: 33,
    otp: 66,
    password: 100,
  },
};

export const useSignupProgressStore = create<State & Actions>((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setProgress: (step, value) =>
    set((state) => ({
      progress: { ...state.progress, [step]: value },
    })),
  nextStep: () =>
    set((state) => {
      if (state.step === 'email_auth') return { step: 'otp' };
      if (state.step === 'otp') return { step: 'password' };
      return { step: 'email_auth' };
    }),
  resetStep: () => set(initialState),
}));
