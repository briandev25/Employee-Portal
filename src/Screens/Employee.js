import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewEmployee from "../components/ViewEmployee";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import DeleteEmployee from "../components/DeleteEmployee";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  //Id for update and delete
  const [employeeID, setEmployeeID] = useState("");

  const openModal = () => {
    setViewModal(true);
  };
  //Add new employee
  const [addNewEmployeeModal, setAddNewEmployeeModal] = useState(false);
  const openNewEmployeeModal = () => {
    setAddNewEmployeeModal(true);
  };
  //Edit an employee
  const [editEmployeeModal, setEditEmployeeModal] = useState(false);
  const openEditEmployeeModal = () => {
    setEditEmployeeModal(true);
  };
  //Delete an employee
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const openingDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const getEmployeeData = async () => {
    const url = "https://em-portal.herokuapp.com/employee";
    await axios.get(url).then((res) => {
      const result = res.data;
      const { status, message, data } = result;
      if (status !== "SUCCESS") {
        alert(status, message);
      } else {
        console.log(data);
        setEmployees(data);
      }
    });
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div>
      <div>
        <h1>Employee Portal</h1>
        <button
          onClick={openNewEmployeeModal}
          className=" actionButtons tw-bg-blue-500 tw-px-4 tw-py-2"
        >
          Add Employee
        </button>
      </div>
      <div className=" table-responsive">
        <table className=" table table-stripped table-hover table-bordered">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Email:</th>
              <th>Phone No:</th>
              <th>Address</th>
              <th>NIC number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.number}</td>
                <td>{emp.address}</td>
                <td>{emp.nic}</td>
                <td>
                  <button
                    className=" actionButtons"
                    onClick={() => {
                      openModal(setRowData(emp));
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      openEditEmployeeModal(
                        setRowData(emp),
                        setEmployeeID(emp._id)
                      );
                    }}
                    className=" actionButtons tw-bg-yellow-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      openingDeleteModal(
                        setRowData(emp),
                        setEmployeeID(emp._id)
                      )
                    }
                    className=" actionButtons tw-bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewEmployee
        viewModal={viewModal}
        rowData={rowData}
        setViewModal={setViewModal}
      />
      <AddEmployee
        viewModal={addNewEmployeeModal}
        setAddNewEmployeeModal={setAddNewEmployeeModal}
      />
      <EditEmployee
        editEmployeeModal={editEmployeeModal}
        rowData={rowData}
        setEditEmployeeModal={setEditEmployeeModal}
        employeeID={employeeID}
      />
      <DeleteEmployee
        rowData={rowData}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        employeeID={employeeID}
      />
    </div>
  );
}

export default Employee;
