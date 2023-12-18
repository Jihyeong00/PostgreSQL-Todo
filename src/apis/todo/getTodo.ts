import supabase from '@/lib/superbase';

export const getTodo = async () => {
  const { data: todoList, error } = await supabase
    .from('TodoList')
    .select()
    .order('id', { ascending: false });
  if (error) {
    throw new Error('에러 발생');
  }

  return todoList;
};
