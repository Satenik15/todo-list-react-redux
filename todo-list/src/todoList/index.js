import React from "react";
import "../styles/todoList.css";
import TodoList from "./todoList";
import Form from "./form";
import { addTask, deleteTask, checkTask } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class MyApp extends React.Component {
   render(){
    return(
      <div className="wrapper">
        <header>
           <h1>My ToDo List</h1>
        </header>
        <div className="content">
           <div className="toDoList">
              <div className="toDoList_header">
                <span className="left">Task</span>
              </div> 
              <TodoList tasks={ this.props.data } onDelete={(e) => {
                 this.props.deleteTask(e)
               }} />
              <Form />
           </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = ( state ) => {
  return {
    data: state.changeTask,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators(
    {
      addTask,
      deleteTask,
      checkTask
    },
    dispatch,
  )
} 


export default connect(mapStateToProps, mapDispatchToProps)(MyApp);



