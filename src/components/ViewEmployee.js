import Modal from "react-bootstrap/Modal";

function ViewEmployee({ viewModal, rowData, setViewModal }) {
  const closeModal = () => {
    setViewModal(false);
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
              value={rowData.name}
              readOnly
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="email"
              className="form-control"
              value={rowData.email}
              readOnly
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="text"
              className="form-control"
              value={rowData.number}
              readOnly
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="text"
              className="form-control"
              value={rowData.address}
              readOnly
            />
          </div>
          <div className="form-group tw-mt-2">
            <input
              type="text"
              className="form-control"
              value={rowData.nic}
              readOnly
            />
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

export default ViewEmployee;
