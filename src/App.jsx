import "./styles.css"

export default function App() {
  // this return statement can only return ONE element.
  return (
    // we can use a div but that would add bloat to the markup. 
    // instead we're using a fragment <></> that doesn't get rnedered and keeps our markup lean.
  <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input type="text" id="item" />
      </div>
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