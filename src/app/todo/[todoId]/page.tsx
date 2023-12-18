'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import { ToastContainer, toast, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoAddModal from '@/app/todo/[todoId]/_components/Modal';
import TodoList from '@/app/todo/[todoId]/_components/List/TodoList';
import { ITodoType } from '@/types/todo';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getTodo } from '@/apis/todo/getTodo';
import { insertTodo } from '@/apis/todo';

export default function TodoPage() {
  const searchParams = useSearchParams();
  console.log(searchParams.get('todoId'));

  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState<ITodoType[]>([]);

  useEffect(() => {
    getTodo().then((res) => setTodoList(res));
  }, []);

  const addTodo = (title: string, content: string) => {
    return new Promise<{
      id: number;
      state: boolean;
      title: string;
      content: string;
    }>((resolve) =>
      setTimeout(async () => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          state: false,
          title,
          content,
        };
        resolve(newTodo);
        await insertTodo({ title, content, state: false });
      }, 3000)
    ).then((todo) => {
      setTodoList([todo, ...todoList]);
      setIsAddTodoModal(false);
    });
  };

  const showTodoToastMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: {
        value: string;
      };
      content: {
        value: string;
      };
    };

    const title = target.title.value;
    const content = target.content.value;
    await toast.promise(addTodo(title, content), {
      pending: 'TODO LOADING',
      success: 'TODO SUCCESS',
      error: 'TODO ERROR',
    });
  };

  const toastOption: ToastContainerProps = {
    autoClose: 2000,
    theme: 'colored',
  };

  const handAddTodoModal = () => {
    setIsAddTodoModal(true);
  };

  const handleCloseTodoModal = () => {
    setIsAddTodoModal(false);
  };

  return (
    <div className={'w-1/4 border-origin'}>
      <div className={'text-4xl bg-gray-200 p-2'}>Todo List</div>
      <div className={'border-origin p-2'}>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <Button className={'w-full mt-2'} onClick={handAddTodoModal}>
          추가
        </Button>
      </div>
      {isAddTodoModal && (
        <TodoAddModal
          onAddToDo={showTodoToastMessage}
          onClose={handleCloseTodoModal}
        />
      )}
      <ToastContainer {...toastOption} />
    </div>
  );
}
