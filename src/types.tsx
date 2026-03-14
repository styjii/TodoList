export type Priority = 'low' | 'medium' | 'high';
export type FilterType = Priority | 'all';

export interface Todo {
  id: string;
  text: string;
  priority: Priority;
  completed: boolean;
}
