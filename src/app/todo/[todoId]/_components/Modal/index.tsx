'use client';

import { FormEvent } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type propsType = {
  onAddToDo: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
};

const TodoAddModal = ({ onAddToDo, onClose }: propsType) => {
  return (
    <div>
      <div onClick={onClose} className={'modalBackGround'} />
      <form
        className={
          'p-2 absolute grid grid-rows-5 top-1/2 left-1/2 bg-white flex-col transform translate-x-[-50%] translate-y-[-50%] w-1/3 h-1/3'
        }
        onSubmit={onAddToDo}
      >
        <div className={'row-span-1 grid- flex justify-between items-start'}>
          <span className={'text-4xl'}>ADD TODO LIST</span>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon size={'xl'} icon={faTimes} />
          </button>
        </div>
        <div className={'row-span-3 flex flex-col'}>
          <input
            className={'row-span-1 h-1/5'}
            placeholder="제목을 입력해주세요"
            name="title"
          />
          <textarea
            className={'row-span-2 h-4/5'}
            placeholder="할 일 내용을 입력해주세요"
            name="content"
          ></textarea>
        </div>
        <button>ADD</button>
      </form>
    </div>
  );
};
export default TodoAddModal;
