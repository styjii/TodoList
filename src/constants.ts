import type { Todo, FilterType } from "./types";

export const STORAGE_KEY = 'todos-app-data';
export const PRIORITY_ORDER: FilterType[] = ['all', 'low', 'medium', 'high'];
export const PRIORITY_LABELS: Record<FilterType, string> = {
  all: 'Tous',
  low: 'Basse',
  medium: 'Moyenne',
  high: 'Élevée'
};

export const loadTodos = (): Todo[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch { return []; }
};
