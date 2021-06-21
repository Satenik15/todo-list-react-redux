import React from "react";
import "../styles/todoList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../actions/index";
class Form extends React.Component {
    state = {
        text: "",
    }

    changeText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
        

    render() {
        return (
            <form className="toDoList_footer" onSubmit={(e) => {
                e.preventDefault();
                if(this.state.text !== "") {
                    this.props.addTask(this.state.text)
                this.setState({
                    text: "",
                })
                }              
              }}>
                 <input type="text" className="text_input" placeholder="Enter Task..." onChange={this.changeText} value={this.state.text}></input>
                 <button>Add</button>
             </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addTask,
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(Form);