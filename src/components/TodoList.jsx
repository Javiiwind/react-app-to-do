import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {

    const [todos, setTodos] = useState([])
    
    //Se ejecuta solo cuando se renderiza el componente 
    useEffect(() => {
        if(localStorage.getItem('todos')){
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, [])

    //Se ejecuta cada vez que cambian los 'todos'
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const agregarTodo = todo => {
        setTodos((old) => [...old, todo])
        console.log(todo);
    }

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    const editarTodo = id => {
        const editarTodos = todos.map(item => (
            item.id === id ? {...item, estado: !item.estado} : item
        ))

        setTodos(editarTodos)
    } 

    return (
        <>
          <Formulario agregarTodo={agregarTodo}></Formulario>
          <ul className="list-group list-group-numbered mt-2 p-2">
              {todos.map((item) => (
                 <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}></Todo>
              ))}
          </ul>
        </>
    )
}

export default TodoList
