'use client';

import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignInForm = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email({ message: '올바르지 않은 이메일 형식입니다.' }),
    password: z
      .string()
      .min(4, {
        message: '패스워드는 최소 4글자이상 작성하셔야 합니다.',
      })
      .max(12, {
        message: '패스워드는 최대 12글자이상 작성하셔야 합니다.',
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (
    data,
    event
  ) => {
    console.log(data);
    const { email, password } = data;

    if (email === 'test@test.test' && password === '12341234') {
      router.push('/todo/4');
    } else {
      alert('현재 등록된 아이디는 test@test.test\n 패스워드는 12341234');
    }
  };

  return (
    <Form {...form}>
      <form
        className={'w-[400px] border-origin p-2'}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className={'grid items-center gap-1.5'}>
                <FormLabel className={'font-bold capitalize'}>email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
              </div>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className={'grid items-center gap-1.5'}>
                <FormLabel className={'font-bold capitalize'}>
                  password
                </FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
              </div>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={'w-full mt-2'}>Login</Button>
      </form>
    </Form>
  );
};
export default SignInForm;
