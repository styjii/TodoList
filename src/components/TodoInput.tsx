import { useState } from "react";
import { PRIORITY_ORDER, PRIORITY_LABELS } from "../constants";
import type { Priority } from "../types";

function TodoInput({
  onAdd,
}: {
  onAdd: (text: string, priority: Priority) => void;
}) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text, priority);
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        className="input input-bordered flex-1"
        placeholder="Nouvelle tâche..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <select
        value={priority}
        className="select select-bordered"
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        {PRIORITY_ORDER.filter((k) => k !== "all").map((key) => (
          <option key={key} value={key}>
            {PRIORITY_LABELS[key]}
          </option>
        ))}
      </select>
      <button
        className="btn btn-primary px-6"
        onClick={handleSubmit}
        disabled={!text.trim()}
      >
        Ajouter
      </button>
    </div>
  );
}

export default TodoInput;
