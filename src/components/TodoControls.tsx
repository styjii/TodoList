import { ListChecks, RotateCcw, Eraser } from "lucide-react"; 
import { PRIORITY_ORDER, PRIORITY_LABELS } from "../constants";
import type { FilterType, Todo } from "../types";

interface Props {
  todos: Todo[];
  filter: FilterType;
  setFilter: (f: FilterType) => void;
  onClearAll: () => void;
  onToggleAll: () => void;
  isAllCompleted: boolean; 
  hasFilteredItems: boolean;
}

function TodoControls({
  todos,
  filter,
  setFilter,
  onClearAll,
  onToggleAll,
  isAllCompleted,
  hasFilteredItems,
}: Props) {
  const getCount = (type: FilterType) =>
    type === "all"
      ? todos.length
      : todos.filter((t) => t.priority === type).length;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 border-t border-base-100 pt-4">
      <div className="flex flex-wrap gap-2">
        {PRIORITY_ORDER.map((type) => (
          <button
            key={type}
            className={`btn btn-sm btn-soft ${filter === type ? "btn-primary" : "bg-base-100"}`}
            onClick={() => setFilter(type)}
          >
            {PRIORITY_LABELS[type]} ({getCount(type)})
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button 
          className={`btn btn-sm btn-outline ${isAllCompleted ? 'btn-warning' : 'btn-success'}`} 
          onClick={onToggleAll} 
          disabled={!hasFilteredItems}
        >
          {isAllCompleted ? (
            <>
              <RotateCcw size={16} /> Tout rétablir
            </>
          ) : (
            <>
              <ListChecks size={16} /> Tout terminer
            </>
          )}
        </button>
        
        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={onClearAll}
          disabled={!hasFilteredItems}
        >
          <Eraser size={16} /> Tout vider
        </button>
      </div>
    </div>
  );
}

export default TodoControls;
