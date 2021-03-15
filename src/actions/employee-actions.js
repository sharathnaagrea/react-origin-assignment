import { ActionTypes } from "./constants.js";

export const fetchEmployees = (payload) => {
    return {
        type: ActionTypes.FETCH_EMP,
        payload: payload
    }
}

export const updateEmployee = (payload) => {
    return {
        type: ActionTypes.UPDATE_EMP,
        payload: payload
    }
}

export const deleteEmployee = (id) => {
    return {
        type: ActionTypes.DELETE_EMP,
        id: id
    }
}