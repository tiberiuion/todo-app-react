export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {/* TODO whre is this .title coming from?
              It's coming from the handleSubmit function on line 21
          */}
          {title}
        </label>
        {/* TODO look through the todo logic section of the tutorial and take some notes. There's a lot going on here I need to look into. */}
        <button
            onClick={() => deleteTodo(id)}
            className="btn btn-danger"
        >
        Delete
        </button>
      </li>
    )
}