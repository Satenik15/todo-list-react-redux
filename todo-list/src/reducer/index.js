import { createStore, combineReducers } from "redux";
import { ADD_TASK, DELETE_TASK, CHECK_TASK } from "../constants/index";

let initialState = [
  {
    id: Math.random(),
    text: "Wake up",
    checked: false,  
  }, 
  {
    id: Math.random(),
    text: "Go to work",
    checked: false,
  },
  {
    id: Math.random(),
    text: "To train",
    checked: false,
  },
  {
    id: Math.random(),
    text: "Go home",
    checked: false,
  }     
];

const changeTask = (state = initialState, action) => {
  switch(action.type) {
     case ADD_TASK: 
        return [
          ...state,
          {
            id: Math.random(),
            text: action.payload,
            checked: false,
          }
        ];
      case DELETE_TASK:
        return state.filter(todo => todo.id !== action.payload);
      case CHECK_TASK:
        return  state.map(task => 
          task.id === action.payload  ?
            {
              ...task,
              checked: !task.checked,
            } : task 
          );    
      default:
         return state;
  }
}

const reducers = {
  changeTask: changeTask,
};

const store = createStore(combineReducers(reducers));

export default store;
