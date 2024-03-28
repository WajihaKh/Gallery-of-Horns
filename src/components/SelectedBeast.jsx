import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const SelectedBeast = ({selectBeast, showModal, handleCloseModal}) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <img src={selectBeast.image_url} alt={selectBeast.title} style={{maxWidth: '100%'}}/>
            <p>{selectBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
    }
    

export default SelectedBeast;