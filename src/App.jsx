import { useState } from "react"
import "./styles.css"

export default function App() {
  // TODO: look into destructuring
  // Below we're looking at destructuring, a javascript concept NOT react.
  // state is immutable. It cannot be changed by accessingit directly. It can only be changed by invoking the setNewItem function.
  const [newItem, setNewItem] = useState("")
  // this return statement can only return ONE element.
  return (
    // we can use a div but that would add bloat to the markup. 
    // instead we're using a fragment <></> that doesn't get rnedered and keeps our markup lean.
  <>
    <form className="new-item-form">
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
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </>
  )
}