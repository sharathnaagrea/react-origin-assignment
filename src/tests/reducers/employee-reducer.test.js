import { expect } from 'chai';

import { ActionTypes } from "../../actions/constants.js";
import EmployeeReducer from '../../reducers/employee-reducer.js';

describe('employee reducers', () => {
    const employees = [{ 'id': 1, 'First Name': 'Sharath' }, { 'id': 2, 'First Name': 'Hari' }];
    const defaultState = { employees: [], error: null }

    it('should return the initial state', () => {
        expect(EmployeeReducer(defaultState, '')).equal(defaultState)
    })

    it('should handle FETCH_EMP', () => {
        expect(
            EmployeeReducer(employees, ActionTypes.FETCH_EMP)
        ).equal(employees)
    });

    it('should handle DELETE_EMP', () => {
        const action = {
            type: ActionTypes.DELETE_EMP,
            id: 1
        }
        const state = { employees: employees }
        expect(
            EmployeeReducer(state, action).employees[0]
        ).equal(employees[1])
    })
})
