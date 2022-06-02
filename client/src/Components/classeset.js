import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {getAllClasses} from "../js/actions/classe"
import { Table } from "react-bootstrap";
import Modal from "./admin/ModalClasseEt"
const Classeset = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, [getAllClasses]);
  const classes = useSelector((state) => state.classeReducer.classe);
  const user = useSelector((state) => state.userReducer.user);
  
  let forms = [];
  for (let i = 0; i < classes.length; i++) {
    if ( classes[i].proffeseur.includes(user._id)) {
      forms.push(classes[i]);
    }
  }
  console.log(forms)

  
 
  return (
    <div>

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>nom</th>
        <th>formation</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {forms.map((form) => (
        
        <tr>
          <td>{form.nom}</td>
          <td>
              <div>{form.formation.nom}</div>
          </td>
          <td>
          <div>  <Modal id={form._id} /></div>
      </td>
      
        </tr>
      ))}
    </tbody>
  </Table>



    <div>nzyd cours</div>
    </div>
   
  )
}

export default Classeset