import supabase from '@/lib/superbase';
import { ITodoType } from '@/types/todo';

export const updateTodo = async (state: Partial<ITodoType>) => {
  const { error } = await supabase
    .from('TodoList')
    .update(state)
    .eq('id', state.id!);
  if (error) {
    throw new Error('에러 발생');
  }
};
