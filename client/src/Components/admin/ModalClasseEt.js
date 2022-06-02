import React from 'react'
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {editClasse} from "../../js/actions/classe"
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
const ModalClasseEt = (id) => {
    const dispatch = useDispatch();
 const idCl=id.id
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [cours, setcours] = useState([])
const fileChanged = (e) => {
    e.preventDefault();
    setcours({ ...cours, [e.target.name]:(e.target.files[0])});
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editClasse({ id: idCl }, cours));
  };
  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleShow}>
        button
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form><TextField
          required
          id='outlined-required'
          name="cours"
          type="file"
          onChange={fileChanged}
        /></Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            fermer
          </Button>

          <Button
            variant='primary'
            onClick={submitHandler}
          >
            confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalClasseEt