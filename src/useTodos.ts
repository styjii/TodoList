import { useState, useEffect, useMemo } from "react";
import type { Todo, Priority, FilterType } from "./types";
import { STORAGE_KEY, loadTodos, PRIORITY_LABELS } from "./constants";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return filter === "all"
      ? todos
      : todos.filter((t) => t.priority === filter);
  }, [todos, filter]);

  const addTodo = (text: string, priority: Priority) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      priority,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const completeFiltered = () => {
    const ids = filteredTodos.map((t) => t.id);
    setTodos((prev) =>
      prev.map((t) =>
        ids.includes(t.id) ? { ...t, completed: true } : t,
      ),
    );
  };

  const deleteFiltered = () => {
    const label =
      filter === "all" ? "toutes" : `"${PRIORITY_LABELS[filter]}"`;
    if (confirm(`Supprimer les tâches ${label} ?`)) {
      const ids = filteredTodos.map((t) => t.id);
      setTodos((prev) => prev.filter((t) => !ids.includes(t.id)));
    }
  };

  const isAllFilteredCompleted = useMemo(() => {
    return (
      filteredTodos.length > 0 && filteredTodos.every((t) => t.completed)
    );
  }, [filteredTodos]);

  const toggleAllFiltered = () => {
    const ids = filteredTodos.map((t) => t.id);
    const targetValue = !isAllFilteredCompleted;

    setTodos((prev) =>
      prev.map((t) =>
        ids.includes(t.id) ? { ...t, completed: targetValue } : t,
      ),
    );
  };

  return {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    completeFiltered,
    deleteFiltered,
    isAllFilteredCompleted,
    toggleAllFiltered,
  };
};

export default useTodos;
