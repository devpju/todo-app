import { TaskInput } from './TaskInput';
import { TodoList } from './TodoList';

export const MainContent = () => {
  return (
    <div className="min-h-dvh flex-[2] bg-[#f1f1f1] px-8">
      <p className="my-5 text-2xl font-bold">All</p>
      <TaskInput />
      <TodoList />
    </div>
  );
};
