import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function EditEmployee({
  editEmployeeModal,
  setEditEmployeeModal,
  rowData,
  employeeID,
}) {
  const [name, setName] = useState(rowData.name);
  const [email, setEmail] = useState(rowData.email);
  const [number, setNumber] = useState(rowData.number);
  const [address, setAddress] = useState(rowData.address);
  const [nic, setNic] = useState(rowData.nic);
  const closeModal = () => {
    setEditEmployeeModal(false);
  };
  const editEmployee = async () => {
    const url = `https://em-portal.herokuapp.com/employee/${employeeID}`;
    const employeeDetails = { name, email, number, address, nic };
    await axios.put(url, employeeDetails).then((res) => {
      const result = res.data;
      const { status, message, data } = result;
      if (status !== "SUCCESS") {
        alert(status, message);
      } else {
        alert(message);
        window.location.reload();
      }
    });
  };
  return (
    <div className="model-box-view">
      <Modal
        show={editEmployeeModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              defaultValue={rowData.name}
            />
          </div>
          <div className="form-group tw-mt-2">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={rowData.email}
            />
          </div>
          <div className="form-group tw-mt-2">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNumber(e.target.value)}
              defaultValue={rowData.number}
            />
          </div>
          <div className="form-group tw-mt-2">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
              defaultValue={rowData.address}
            />
          </div>
          <div className="form-group tw-mt-2">
            <label>NIC Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNic(e.target.value)}
              defaultValue={rowData.nic}
            />
          </div>
          <button
            onClick={editEmployee}
            className=" actionButtons tw-bg-red-500 tw-py-2 tw-px-4 tw-mt-2"
          >
            Edit Employee
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={closeModal}
            className=" tw-bg-slate-600 tw-py-2 tw-px-4 tw-rounded-md tw-text-gray-50 active:tw-scale-95 tw-transition tw-transform tw-ease-in-out"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditEmployee;
