import React from 'react';
import { Modal } from 'react-bootstrap';

export const ModalInstance = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are You sure</h4>
          <p>You want to delete this post? Once you confirm this, the post is gone forevereverever.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onClose} className="btn btn-default">Cancel</button>
          <button onClick={props.onHandleClick} className="btn btn-primary">Yes, I'm sure</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

