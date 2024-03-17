import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue);
  })

  // TODO This is a hook but where is it comming from? What other hooks are there?
  // They HAVE to be at the top of the file and cannot be ran conditionally.
  useEffect(() => {
    // TODO Where tf is localStorage coming from?
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    // TODO look into wtf is this?

    setTodos(currentTodos => {
        return [
          // THere it is again. TODO: Look into this.
          ...currentTodos,
          {id:crypto.randomUUID(), title, completed: false },
        ]
      })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      } )
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }
  
  // this return statement can only return ONE element.
  return (
    // we can use a div but that would add bloat to the markup. 
    // instead we're using a fragment <></> that doesn't get rnedered and keeps our markup lean.
  <>
  {/* The name of the prop "onSubmit" called here, should match the parameter in the NewTodoForm function from NewTodoForm.jsx */}
  <NewTodoForm onSubmit={addTodo} />
  <h1 className="header">Todo list</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}