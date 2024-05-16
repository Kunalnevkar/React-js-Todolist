import TodosContainer from "./containers/todos";
import TodosContextProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="">
      <div className="pt-20">
        <h1 className="text-5xl font-extralight text-center">Todo List</h1>
      </div>
      <TodosContextProvider>
        <TodosContainer />
      </TodosContextProvider>
      <div className="text-center text-xs">
      </div>
    </div>
  );
}

export default App;
