import { useMutation } from 'react-query';
import { axiosInstance } from '@/apis/axiosInstace';
import { AxiosError } from 'axios';

interface RequestType {
  email: string;
  password: string;
}

interface ResponseType {
  message: string;
}

export const useLogin = () => {
  const { mutateAsync: login } = useMutation<
    ResponseType,
    AxiosError,
    RequestType
  >(['login'], async ({ email, password }) => {
    const response = await axiosInstance.post('login', {
      email,
      password,
    });
    return response.data;
  });

  return { login };
};
