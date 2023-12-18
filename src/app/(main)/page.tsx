'use client';

import SignInForm from '@/app/(main)/_components/SignIn.tsx';
import { MouseEventHandler, useState } from 'react';
import SignUpForm from '@/app/(main)/_components/SignUp.tsx';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [isFormLogin, setIsFormLogin] = useState<boolean>(true);

  const onClickFormHeader: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as typeof event.target & {
      innerHTML: string;
    };
    if (target.innerHTML === 'LOGIN') {
      setIsFormLogin(true);
    } else {
      setIsFormLogin(false);
    }
  };

  return (
    <div
      className={'h-[calc(80vh-20px)] w-[400px] flex flex-col justify-center'}
    >
      <div className={'grid grid-cols-2 w-full text-center cursor-pointer'}>
        <Button
          className={`rounded-none rounded-tl-sm ${
            isFormLogin ? 'bg-black bg-opacity-60' : ''
          }`}
          onClick={onClickFormHeader}
        >
          LOGIN
        </Button>
        <Button
          className={`rounded-none rounded-tr-sm ${
            !isFormLogin ? 'bg-black bg-opacity-60' : ''
          }`}
          onClick={onClickFormHeader}
        >
          SIGN
        </Button>
      </div>
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}
