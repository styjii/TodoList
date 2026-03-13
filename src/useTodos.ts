import { useEffect, useState } from "react";
import type { Todo, Priority, Filter } from "./types";

const STORAGE_KEY = "vite_react_todos";

const loadTodos = (): Todo[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string, priority: Priority) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      priority,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setSelected((prev) => prev.filter((sid) => sid !== id));
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const completeSelected = () => {
    setTodos((prev) =>
      prev.map((t) =>
        selected.includes(t.id) ? { ...t, completed: true } : t
      )
    );
    setSelected([]);
  };

  const filteredTodos =
    filter === "all" ? todos : todos.filter((t) => t.priority === filter);

  return {
    todos,
    filteredTodos,
    selected,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleSelect,
    completeSelected,
  };
}