import type { Todo } from "../types";

interface Props {
  todo: Todo;
  selected: boolean;
  onToggleSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({
  todo,
  selected,
  onToggleSelect,
  onDelete,
}: Props) {
  const priorityColor = (p: string) => {
    switch (p) {
      case "important":
        return "bg-red-100 text-red-600";
      case "normal":
        return "bg-blue-100 text-blue-600";
      case "low":
        return "bg-green-100 text-green-600";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex items-center justify-between border p-3 rounded-lg ${
        todo.completed ? "opacity-60 line-through" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggleSelect(todo.id)}
        />

        <span>{todo.text}</span>

        <span
          className={`text-xs px-2 py-1 rounded ${priorityColor(
            todo.priority
          )}`}
        >
          {todo.priority}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Supprimer
      </button>
    </div>
  );
}