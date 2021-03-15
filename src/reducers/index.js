import { combineReducers } from 'redux';
import employees from './employee-reducer';

export default combineReducers({
    employeeData: employees
})