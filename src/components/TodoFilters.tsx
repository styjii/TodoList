import type { Filter, Todo } from "../types";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  completeSelected: () => void;
  todos: Todo[];
  selected: string[];
}

export default function TodoFilters({
  filter,
  setFilter,
  completeSelected,
  todos,
  selected
}: Props) {
  const isNoneSelected = selected.length === 0;

  const count = (value: Filter) => {
    if (value === "all") return todos.length;
    return todos.filter(t => t.priority === value).length;
  };

  const btn = (value: Filter, label: string) => (
    <button
      onClick={() => setFilter(value)}
      className={`filter-btn ${filter === value ? "active" : ""}`}
    >
      {label} ({count(value)})
    </button>
  );

  return (
    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
      <div className="flex gap-2 flex-wrap">
        {btn("all", "Tous")}
        {btn("important", "Important")}
        {btn("normal", "Normal")}
        {btn("low", "Basse")}
      </div>

      <button
        onClick={completeSelected}
        disabled={isNoneSelected}
        className={`bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-opacity 
          ${isNoneSelected ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
      >
        Terminer les tâches
      </button>
    </div>
  );
}