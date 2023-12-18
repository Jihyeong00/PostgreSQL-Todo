import { ITodoType } from '@/types/todo';
import { Dispatch, SetStateAction } from 'react';
import OneTodo from '@/app/todo/[todoId]/_components/List/OneTodo';
import { deleteTodo, updateTodo } from '@/apis/todo';

type propsType = {
  todoList: ITodoType[];
  setTodoList: Dispatch<SetStateAction<ITodoType[]>>;
};

const TodoList = ({ todoList, setTodoList }: propsType) => {
  const checkTodo = async (id: number) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id)!;
    todo.state = !todo.state;
    setTodoList(_todoList);
    await updateTodo({
      id: todo.id,
      content: todo.content,
      title: todo.title,
      state: todo.state,
    });
  };

  const updateHandling = async (
    updateInfo: Pick<ITodoType, 'content' | 'id'>
  ) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === updateInfo.id)!;
    todo.content = updateInfo.content;
    setTodoList(_todoList);
    await updateTodo({
      id: updateInfo.id,
      content: updateInfo.content,
      title: todo.title,
      state: todo.state,
    });
  };

  const deleteHandling = async (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      const _todoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(_todoList);
      await deleteTodo(id);
    }
  };

  return (
    <div className={'flex flex-col gap-2'}>
      {todoList.map((todo) => (
        <OneTodo
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          updateTodo={updateHandling}
          deleteTodo={deleteHandling}
        />
      ))}
    </div>
  );
};
export default TodoList;
