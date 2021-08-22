import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
//show={show} onHide={handleClose}
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                
                <Modal >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}

                </Modal>
            </div>
        )
    }
}

export default UpdateForm
