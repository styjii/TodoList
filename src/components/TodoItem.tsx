import { motion } from "framer-motion";
import { Trash, CheckCircle } from "lucide-react";
import { PRIORITY_LABELS } from "../constants";
import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="flex justify-between items-center bg-base-100 p-4 rounded-xl shadow-sm border border-base-200"
    >
      <div className="flex items-center gap-4">
        <span
          className={`text-lg transition-all duration-300 ${todo.completed
              ? "line-through opacity-40 italic"
              : "font-semibold"
            }`}
        >
          {todo.text}
        </span>
        <span
          className={`badge badge-sm badge-outline ${todo.priority === "high"
              ? "badge-error"
              : todo.priority === "medium"
                ? "badge-warning"
                : "badge-info"
            }`}
        >
          {PRIORITY_LABELS[todo.priority]}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`btn btn-sm ${todo.completed ? "btn-ghost opacity-50" : "btn-success btn-soft"}`}
          onClick={() => onToggle(todo.id)}
        >
          <CheckCircle size={16} />
          {todo.completed ? "Rétablir" : "Terminer"}
        </button>
        <button
          className="btn btn-sm btn-ghost text-error"
          onClick={() => onDelete(todo.id)}
        >
          <Trash size={16} />
        </button>
      </div>
    </motion.li>
  );
}

export default TodoItem;
