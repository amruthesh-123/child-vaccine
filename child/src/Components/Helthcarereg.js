
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Helthcarereg() {
 
  const [photo, setPhoto] = useState(null);
  const [id, setid] = useState('');
  const [empname, setEmpname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [housename, setAddress] = useState('');
  const [place, setPlace] = useState('');





  const handlePhoto = (e) => setPhoto(e.target.files[0]);

  const submitForm = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('photo', photo);  // Use photo directly
    formData.append('id', id);
    formData.append('empname', empname);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('phoneno', phoneno);
    formData.append('housename', housename);
    formData.append('place', place);
   
  console.log(username)
    axios.post('http://localhost:8000/helthcarereg', formData, {
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
<h5 className=''>Helthcare Registration</h5>
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
            <FloatingLabel controlId="floatingEmail" label="Email Address">
              <Form.Control required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </FloatingLabel>
          </Col>
          
          <Col md={4}>
            <FloatingLabel controlId="floatingUsername" label="Username">
              <Form.Control required type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={4}>
            <FloatingLabel controlId="floatingPhoneno" label="Phone Number">
              <Form.Control required type="number" placeholder="Phone Number" onChange={(e) => setPhoneno(e.target.value)} />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingHousename" label="Address">
              <Form.Control required type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingPlace" label="Place">
              <Form.Control required type="text" placeholder="Place" onChange={(e) => setPlace(e.target.value)} />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-success mt-3">Register</Button>
          <Button href="/" className="btn btn-danger mt-3 ms-2">Cancel</Button>
        </div>
      </Form>
      </div>
    </div>
  );
}

export default Helthcarereg;

