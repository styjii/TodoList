export type Priority = "important" | "normal" | "low";

export type Filter = "all" | Priority;

export interface Todo {
  id: string;
  text: string;
  priority: Priority;
  completed: boolean;
}