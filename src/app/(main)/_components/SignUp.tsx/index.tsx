'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignUpForm = () => {
  const formSchema = z
    .object({
      email: z.string().email({ message: '올바르지 않은 이메일 형식입니다.' }),
      password: z
        .string()
        .min(4, {
          message: '패스워드는 최소 4글자이상 작성하셔야 합니다.',
        })
        .max(12, {
          message: '패스워드는 최대 12글자이상 작성하셔야 합니다.',
        }),
      confirmPassword: z
        .string()
        .min(4, {
          message: '패스워드는 최소 4글자이상 작성하셔야 합니다.',
        })
        .max(12, {
          message: '패스워드는 최대 12글자이상 작성하셔야 합니다.',
        }),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: 'The passwords did not match',
        });
      }
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
    confirmPassword: string;
  }> = (data, event) => {
    const { email, password, confirmPassword } = data;
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
              <FormLabel className={'font-bold capitalize'}>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>This is Your Email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'font-bold capitalize'}>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>This is your private password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'font-bold capitalize'}>
                password Confirm
              </FormLabel>
              <FormControl>
                <Input placeholder="PasswordConfirm" {...field} />
              </FormControl>
              <FormDescription>Check Your PassWord Confirm</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={'w-full mt-2'}>SignUp</Button>
      </form>
    </Form>
  );
};
export default SignUpForm;
