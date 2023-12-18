'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ITodoType } from '@/types/todo';
import useTextarea from '@/hooks/use-textarea';

type propsType = {
  todo: ITodoType;
  checkTodo: (id: number) => void;
  updateTodo: (updateInfo: Pick<ITodoType, 'content' | 'id'>) => void;
  deleteTodo: (id: number) => void;
};

const OneTodo = ({ todo, updateTodo, deleteTodo, checkTodo }: propsType) => {
  const { id, state, title, content } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, onChangeEditContent] = useTextarea(content);

  const handleCheckTodo = () => {
    checkTodo(id);
  };

  const handleTodoEdit = () => {
    if (!isEditMode) return setIsEditMode(true);
    updateTodo({ id, content: editContent });
    setIsEditMode(false);
  };

  const handleTodoDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className={'flex flex-col border-origin p-2 rounded'}>
      <div className={'flex justify-between'}>
        <div onClick={handleCheckTodo}>
          <FontAwesomeIcon className={'cursor-pointer'} icon={faCheck} />
        </div>
        <div className={'flex justify-between'}>
          <span className={state ? 'line-through' : ''}>{title}</span>
          <div className={`flex gap-2 items-center ml-2`}>
            <FontAwesomeIcon
              className={'cursor-pointer'}
              icon={faPen}
              onClick={handleTodoEdit}
            />
            <FontAwesomeIcon
              className={'cursor-pointer'}
              icon={faBan}
              onClick={handleTodoDelete}
            />
          </div>
        </div>
      </div>
      <div>
        {isEditMode ? (
          <textarea
            value={editContent}
            onChange={onChangeEditContent}
          ></textarea>
        ) : (
          <span className={state ? 'line-through' : ''}>{content}</span>
        )}
      </div>
    </div>
  );
};
export default OneTodo;
