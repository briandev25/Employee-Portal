import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AddEmployee({ viewModal, rowData, setAddNewEmployeeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const closeModal = () => {
    setAddNewEmployeeModal(false);
  };
  const addEmployee = async () => {
    const url = "https://em-portal.herokuapp.com/employee";
    const employeeDetails = { name, email, number, address, nic };
    await axios.post(url, employeeDetails).then((res) => {
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
        show={viewModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Please enter name"
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter email"
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Please enter phone number"
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Please enter address"
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNic(e.target.value)}
              placeholder="Please enter NIC card Number"
            />
            <button
              type="submit"
              className="actionButtons tw-bg-green-600 tw-py-2 tw-px-4 tw-mt-2"
              onClick={addEmployee}
            >
              Add Employee
            </button>
          </div>
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

export default AddEmployee;
