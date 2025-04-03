import { useState, useEffect } from "react";
import './Employees.css';
import { useUiStore, useUpdateEmployee } from "../../Hooks";
import { GetEmployees } from "../../Requester";
import { AddEmployeeModal, DeleteEmployeeModal, UpdateEmployeeModal } from "./Modals";

export function Employees() {
  const [employees, useEmployees] = useState([]);

  const { OpenModal } = useUiStore();
  const { OpenUpdateModal } = useUiStore();
  const { OpenDeleteModal } = useUiStore();
  const { UpdateEmployee } = useUpdateEmployee();

  const getEmployees = async () => {
    try {
      const response = await GetEmployees();
      useEmployees(response.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEmployees();
  }, [])

  function UpdateEmployees(employee) {
    UpdateEmployee(employee);
    OpenUpdateModal();
  }

  function DeleteEmployee(employee) {
    console.log(employee)
    UpdateEmployee(employee);
    OpenDeleteModal();
  }


  const HTMLemployees = employees.map((employee) => {
    return (
      <tr key={employee.id}>
        <td scope="col">{employee.id}</td>
        <td scope="col">{employee.firstName}</td>
        <td scope="col">{employee.age}</td>
        <td scope="col">{employee.phone}</td>
        <td scope="col">{employee.username}</td>
        <td scope="col">{employee.address.country}</td>
        <td><button className="btn" onClick={() => UpdateEmployees(employee)}><i className=" fa-solid fa-pen-to-square"></i></button></td>
        <td><button className="btn" onClick={() => DeleteEmployee(employee)}><i className=" fa-solid fa-trash"></i></button></td>
      </tr>
    )
  })

  return (
    <>
      <div className="btn i-button m-3" onClick={OpenModal}>Add Employee</div>
      <div className="btn i-button m-3" onClick={getEmployees}><i className="fa-solid fa-rotate-right"></i></div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Stock</th>
              <th scope="col">Expiration date</th>
              <th scope="col">Provider</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">

            {HTMLemployees}

          </tbody>
        </table>
      </div>
      <AddEmployeeModal></AddEmployeeModal>
      <UpdateEmployeeModal></UpdateEmployeeModal>
      <DeleteEmployeeModal></DeleteEmployeeModal>
    </>
  );

}
