import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  selected: string[];
  toggleSelect: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  selected,
  toggleSelect,
  deleteTodo,
}: Props) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-400">Aucune tâche</p>;
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selected={selected.includes(todo.id)}
          onToggleSelect={toggleSelect}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}