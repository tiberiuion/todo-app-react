import { useState } from "react"
import "./styles.css"

export default function App() {
  // TODO: look into destructuring
  // Below we're looking at destructuring, a javascript concept NOT react.
  // state is immutable. It cannot be changed by accessingit directly. It can only be changed by invoking the setNewItem function.
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    
    // TODO look into wtf is this?
    // setTodos([...todos, {}])

    setTodos(currentTodos => {
      return [
        // THere it is again. TODO: Look into this.
        ...currentTodos,
        {id:crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("");
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
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          // TODO: Go over the react section again and write some comments.
          onChange={e => setNewItem(e.target.value)}          
          type="text"
          id="item"
        />
      </div>
      <button className="btn"> Add </button>
    </form>
    <h1 className="header">Todo list</h1>
    <ul className="list">

      {/* TODO: look into short circuiting */}
      {/* This is called short circuiting. It's a JS concept. */}
      {todos.length === 0 && "No ToDos"}
     
      {todos.map(todo => {
        return (
        <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {/* TODO whre is this .title coming from?
                It's coming from the handleSubmit function on line 21
            */}
            {todo.title}
          </label>
          {/* TODO look through the todo logic section of the tutorial and take some notes. There's a lot going on here I need to look into. */}
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
        </li>
        )}
      )}
    </ul>
  </>
  )
}