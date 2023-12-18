import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  };

  return <Button onClick={onClick}>{'홈으로 이동'}</Button>;
};

export default LoginButton;
