
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Navigate,useNavigate } from 'react-router-dom';

function Childreg() {
 
  const [photo, setPhoto] = useState('');
  const [id, setid] = useState('');
  const [empname, setEmpname] = useState('');
  const [Role, setRole] = useState('');
  const [dateofbirth, setDob] = useState('');
  const [medicalhistory, setMedicalhistory] = useState('');
  var storedUserID = localStorage.getItem("userid");
  const navigate = useNavigate()

const healthid =localStorage.getItem('healthid')
const vaccineid =localStorage.getItem('vaccineid')

console.log(healthid)

  const handlePhoto = (e) => setPhoto(e.target.files[0]);

  const submitForm = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('photo', photo);  // Use photo directly
    formData.append('id', id);
    formData.append('empname', empname);
    formData.append('Role', Role);
    formData.append('dateofbirth', dateofbirth);
    formData.append('medicalhistory', medicalhistory);
    formData.append('healthid', healthid);
    formData.append('vaccineid', vaccineid);
   
 
    axios.post(`http://localhost:8000/childregister/${storedUserID}`, formData, {

      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      console.log(res);
      if (res.data.status === "user already exist") {
        alert("User already exists");
      } else {
        alert("Registration successful");
        navigate('/homepage')
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to register");
    });
  };
  

  return (
    <div>
      <div className='container border p-3 shadow-lg w-75 rounded-3 container-sm mt-5 mb-3'>
<div className='mb-4 d-flex justify-content-between align-items-center'>
<h5 className=''>Child Registration</h5>
<Button variant='danger' href='/viewemployee'><i className="ri-eye-fill"></i></Button>
</div>
      <Form onSubmit={submitForm}>
        <Row className="mb-3">
          <Col md={4}>
            
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingPhoto" label="Photo">
              <Form.Control required type="file" placeholder="Upload Photo" onChange={handlePhoto} />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingName" label="Name">
              <Form.Control required type="text" placeholder="Name" onChange={(e) => setEmpname(e.target.value)} />
            </FloatingLabel>
          </Col>
          
        </Row>
        <Row className="mb-3">
        <Col md={4}>
        <FloatingLabel controlId="floatingRole" label="Role">
        <Form.Select required onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled selected> Relationship Status </option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Guardian">Guardian</option>
            </Form.Select>
            </FloatingLabel>
            </Col>
          
            <Col md={4}>
            <FloatingLabel controlId="floatingName" label="Date of Birth">
              <Form.Control required type="date" placeholder="Date of Birth" onChange={(e) => setDob(e.target.value)} />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingPlace" label="Medical History">
              <Form.Control required type="text" placeholder="Medical History" onChange={(e) => setMedicalhistory(e.target.value)} />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-success mt-3">Register</Button>
          <Button href="/homepage" className="btn btn-danger mt-3 ms-2">Cancel</Button>
        </div>
      </Form>
      </div>
    </div>
  );
}

export default Childreg;

