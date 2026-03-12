import type { Filter } from "../types";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  completeSelected: () => void;
}

export default function TodoFilters({
  filter,
  setFilter,
  completeSelected,
}: Props) {
  const btn = (value: Filter, label: string) => (
    <button
      onClick={() => setFilter(value)}
      className={`filter-btn ${filter === value && "active"}`}
    >
      {label}
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
        className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
      >
        Terminer les tâches
      </button>
    </div>
  );
}