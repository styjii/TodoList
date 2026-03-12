import { useState } from "react";
import type { Priority } from "../types";

interface Props {
  onAdd: (text: string, priority: Priority) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("normal");

  const handleAdd = () => {
    onAdd(text, priority);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-6 flex-col md:flex-row">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche..."
        className="flex-1 border rounded-lg px-3 py-2"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="important">Important</option>
        <option value="normal">Normal</option>
        <option value="low">Basse</option>
      </select>

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Ajouter
      </button>
    </div>
  );
}