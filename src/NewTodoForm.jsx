import { useState } from "react";

// The below can also be written as export function NewTodoForm(props) {
//     props.onSubmit
// }

// TODO: look at destructuring and the concept of props 
// destructuring: https://spotify.link/lLUGJfB10Hb
// props: https://react.dev/learn/passing-props-to-a-component

// What's going on in the NewTodoForm function is that the props object has been destructured.

export function NewTodoForm({onSubmit}) {
    // TODO: look into destructuring
    // destructuring: https://spotify.link/lLUGJfB10Hb
    // Below we're looking at destructuring, a javascript concept NOT react.
    // state is immutable. It cannot be changed by accessingit directly. It can only be changed by invoking the setNewItem function.
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        if(newItem === "") return;
        
        onSubmit(newItem)
    
        setNewItem("");
      }

    return (
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
    )
}