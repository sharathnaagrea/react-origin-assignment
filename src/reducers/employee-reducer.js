import { ActionTypes } from "../actions/constants.js";

const defaultState = {
    employees: [],
    error: null
}

function employeeDataReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_EMP:
            return {
                ...state,
                employees: action.payload
            };
        case ActionTypes.UPDATE_EMP:
            let updatedEmployee = state
                .employees
                .filter(emp => emp.id !== action.payload.id);
            return {
                ...state,
                employees: [...updatedEmployee, action.payload]
            };
        case ActionTypes.DELETE_EMP:
            let filteredEmployee = state
                .employees
                .filter(emp => emp.id !== action.id);
            return {
                ...state,
                employees: filteredEmployee
            };
        default:
            return state;
    }
}

export default employeeDataReducer;