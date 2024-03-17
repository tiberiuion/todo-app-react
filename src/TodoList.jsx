import { TodoItem } from "./TodoItem"

// Again destructuring props.
export function TodoList({todos, toggleTodo, deleteTodo}) {
    return(
        <ul className="list">
        {/* TODO: look into short circuiting */}
        {/* This is called short circuiting. It's a JS concept. */}
        {todos.length === 0 && "No ToDos"}
        {todos.map(todo => {
          return <TodoItem
            // TODO wtf is this? Spread opeartor? How does it work?
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          }
        )}
      </ul>
    )
}