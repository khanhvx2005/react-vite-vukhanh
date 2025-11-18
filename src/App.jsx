import "../components/todo/style.css"
import TodoData from "../components/todo/TodoData"
import TodoForm from "../components/todo/TodoForm"
import logo from "./assets/react.svg"
const App = () => {


  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoForm />
      <TodoData />
      <div className="todo-image">
        <img src={logo} className="logo" alt="" />
      </div>
    </div>
  )
}

export default App
