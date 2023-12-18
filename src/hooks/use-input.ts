import { Dispatch, SetStateAction, useState } from 'react';

const useInput = <T>(
  initialValue: T
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
] => {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as typeof e.target & {
      value: T;
    };
    setValue(target.value);
  };
  return [value, onChange, setValue];
};
export default useInput;
