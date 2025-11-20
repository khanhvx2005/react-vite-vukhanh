import "../components/todo/style.css"
import TodoData from "../components/todo/TodoData"
import TodoForm from "../components/todo/TodoForm"
import logo from "./assets/react.svg"
const App = () => {

  const name = "vuxuankhanh";
  const age = 20;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoForm />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={logo} className="logo" alt="" />
      </div>
    </div>
  )
}

export default App
