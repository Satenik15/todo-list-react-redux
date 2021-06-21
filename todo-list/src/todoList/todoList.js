import "../styles/todoList.css";
import Todo from "./todo";

const TodoList = (props) => {
    const todo = props.tasks.map((value) => {
      return(
          <Todo content={value.text} key={value.id} index={value.id} checked={value.checked} onDelete={props.onDelete} />
        )
    })
      return (
        <div className="todoList">
          {todo}
        </div>
      )
  }

  export default TodoList;