import supabase from '@/lib/superbase';

export const deleteTodo = async (id: number) => {
  const { error } = await supabase.from('TodoList').delete().eq('id', id);
  if (error) {
    throw new Error('에러 발생');
  }
};
