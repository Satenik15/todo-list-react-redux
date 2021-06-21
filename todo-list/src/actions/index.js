import { ADD_TASK, DELETE_TASK, CHECK_TASK } from "../constants/index";

export const addTask = ( data ) => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

export const deleteTask = ( data ) => {
    return {
        type: DELETE_TASK,
        payload: data
    }
}

export const checkTask = (data) => {
    return {
        type: CHECK_TASK,
        payload: data
    }
}