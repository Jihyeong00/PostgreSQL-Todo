import { useMutation } from 'react-query';
import { axiosInstance } from '@/apis/axiosInstace';
import { AxiosError } from 'axios';

interface RequestType {}

interface ResponseType {
  message: string;
}

export const useLogout = () => {
  const { mutateAsync: logout } = useMutation<
    ResponseType,
    AxiosError,
    RequestType
  >(['logout'], async () => {
    const response = await axiosInstance.post('logout');
    return response.data;
  });

  return { logout };
};
