import TodoList from "./components/TodoList"

const App = () => {
    return (
        <div className="container bg-dark">
          <h1 className="text-center mb-3">Aplicación To-Do</h1>
          <TodoList></TodoList> 
        </div>
    )
}

export default App
