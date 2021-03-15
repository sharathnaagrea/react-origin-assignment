import React, { Component } from 'react'
import { connect } from 'react-redux';
import MaterialTable from "material-table";

import { updateEmployee, deleteEmployee } from '../actions/employee-actions';
import RestApi from './rest-api';

class EmployeeList extends Component {

    state = {}
    render() {
        const columns = [
            { title: 'Id', field: 'id', defaultSort: 'asc', hidden: true },
            { title: 'Fist Name', field: 'firstname' },
            { title: 'Last Name', field: 'lastname' },
            { title: 'Email', field: 'email' },
            { title: 'Mobile', field: 'mobile' },
            { title: 'City', field: 'city' }
        ];

        return (
            <div style={{ marginLeft: "3em", marginTop: "5em" }}>
                <MaterialTable
                    title="Employee List"
                    columns={columns}
                    data={this.props.employees}
                    editable={{
                        onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(newData)
                            }, 1000)
                        }).then((updatedData) => {
                            this.props.updateEmployee(updatedData)
                        }),
                        onRowDelete: deletedData => new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(deletedData)
                            }, 600)
                        }).then((deletedData) => {
                            const id = deletedData.id;
                            this.props.deleteEmployee(id);
                        })


                    }}
                />
                <RestApi />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeeData.employees || []
    }
};

const mapDispatchedToProps = (dispatch) => ({
    updateEmployee: emp => dispatch(updateEmployee(emp)),
    deleteEmployee: id => dispatch(deleteEmployee(id))
});

export default connect(
    mapStateToProps,
    mapDispatchedToProps)(EmployeeList);