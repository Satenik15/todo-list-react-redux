import React from "react";
import "../styles/todoList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkTask } from "../actions/index";
class Todo extends React.Component {
    render () {
      return (
        <div className='list-item'>
            <input type="checkbox" onClick={() => {
              this.props.checkTask(this.props.index)
            }
            }></input> 
            <span className={`${ this.props.checked ? 'checked_true' : null }`}>{ this.props.content }</span>
            <button className={`is-pulled-right ${this.props.checked ? "checked_btn" : null}`} onClick={() => this.props.onDelete(this.props.index)}>x</button>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      data: state.changeTask,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        checkTask
      },
      dispatch,
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);