import { Dispatch, SetStateAction, useState } from 'react';

const useTextarea = <T>(
  initialValue: T
): [
  T,
  (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>,
] => {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as typeof e.target & {
      value: T;
    };
    setValue(target.value);
  };
  return [value, onChange, setValue];
};
export default useTextarea;
