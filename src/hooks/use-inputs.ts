import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

const useInputs = <T>(
  initialValue: T
): [
  T,
  (event: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
] => {
  const [values, setValues] = useState<T>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return [values, onChange, setValues];
};

export default useInputs;
