import supabase from '@/lib/superbase';
import { ITodoType } from '@/types/todo';

export const insertTodo = async (postInfo: Omit<ITodoType, 'id'>) => {
  const { error } = await supabase.from('TodoList').insert(postInfo);
  if (error) {
    throw new Error('에러 발생');
  }
};
