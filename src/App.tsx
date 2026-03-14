import { AnimatePresence, motion } from "framer-motion";
import useTodos from "./useTodos";
import TodoInput from "./components/TodoInput";
import TodoControls from "./components/TodoControls";
import TodoItem from "./components/TodoItem";

function App() {
  const { 
  todos, 
  filteredTodos, 
  filter, 
  setFilter, 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  toggleAllFiltered,
  isAllFilteredCompleted,
  deleteFiltered 
} = useTodos();


  return (
    <div className="flex justify-center p-10 bg-base-200 min-h-screen text-base-content">
      <motion.div
        layout
        className="w-full max-w-4xl flex flex-col gap-6 bg-base-300 p-6 rounded-2xl shadow-xl h-fit"
      >
        <TodoInput onAdd={addTodo} />

        <TodoControls 
          todos={todos} 
          filter={filter} 
          setFilter={setFilter}
          onToggleAll={toggleAllFiltered}
          isAllCompleted={isAllFilteredCompleted}
          onClearAll={deleteFiltered}
          hasFilteredItems={filteredTodos.length > 0}
        />

        <motion.ul layout className="flex flex-col gap-2 relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredTodos.length > 0 ? (
              filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            ) : (
              <motion.li
                key="empty-message"
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center opacity-40 py-10 italic list-none"
              >
                Aucune tâche dans cette catégorie.
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default App;