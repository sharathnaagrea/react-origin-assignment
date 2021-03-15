import { expect } from 'chai';

import { ActionTypes } from "../../actions/constants.js";
import { fetchEmployees, updateEmployee, deleteEmployee } from '../../actions/employee-actions.js';

describe('employee-actions', () => {
    it('should create an action to fetch employees', () => {
        const text = 'employee'
        const expectedAction = {
            type: ActionTypes.FETCH_EMP,
            text
        }
        expect(fetchEmployees(text).payload).equal(expectedAction.text)
    });

    it('should create an action to update employee', () => {
        const text = 'employeeUpdate'
        const expectedAction = {
            type: ActionTypes.FETCH_EMP,
            text
        }
        expect(updateEmployee(text).payload).equal(expectedAction.text)
    });

    it('should create an action to delete employee', () => {
        const text = '2'
        const expectedAction = {
            type: ActionTypes.FETCH_EMP,
            text
        }
        expect(deleteEmployee(text).id).equal(expectedAction.text)
    });
})
