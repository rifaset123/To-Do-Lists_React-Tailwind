import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  Todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoList({ Todos, onCompletedChange, onDelete }: TodoListProps) {
  const todosSorted = Todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todosSorted.length === 0 && (
        <p className="text-center text-gray-500">No todos found</p>
      )}
    </>
  );
}

export default TodoList;
