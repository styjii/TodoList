import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import { useTodos } from "./useTodos";

export default function App() {
  const {
    filteredTodos,
    selected,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleSelect,
    completeSelected,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>

        <TodoForm onAdd={addTodo} />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          completeSelected={completeSelected}
        />

        <TodoList
          todos={filteredTodos}
          selected={selected}
          toggleSelect={toggleSelect}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}