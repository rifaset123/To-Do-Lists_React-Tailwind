import { Trash2 } from "lucide-react";
import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange?: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete }: TodoItemProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-100 grow">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onCompletedChange?.(todo.id, e.target.checked)}
            className="scale-125"
          />
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.title}
          </span>
        </label>
        <button className="p-2 hover:bg-slate-200 rounded-md" onClick={() => onDelete(todo.id)}>
          <Trash2 size={25} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
