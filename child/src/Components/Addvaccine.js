import axios from 'axios';
import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addvaccine() {
  const [vaccinetype, setVaccineType] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [dosesrequired, setDosesRequired] = useState(1); // Default to 1 dose
  const [description, setDescription] = useState('');
  const [agerange, setAgerange] = useState(Array(1).fill(''));

  const healthid = localStorage.getItem('userid');

  const submitForm = (e) => {
    e.preventDefault();

    const formData = {
      vaccinetype,
      manufacturer,
      dosesrequired,
      description,
      agerange
    };

    axios.post(`http://localhost:8000/addvaccine/${healthid}`, formData)
      .then((res) => {
        console.log(res);
        if (res.data.status === "ok") {
          alert("Vaccine added successfully");
        } else {
          alert("Failed to add vaccine");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add vaccine");
      });
  };

  const handleAgeRangeChange = (index, value) => {
    const updatedAgerange = [...agerange];
    updatedAgerange[index] = value;
    setAgerange(updatedAgerange);
  };

  const renderAgeRangeSelects = () => {
    const selects = [];
    for (let i = 0; i < dosesrequired; i++) {
      selects.push(
        <Col md={6} key={i}>
          <FloatingLabel controlId={`floatingAgeRange${i + 1}`} label={`Age Range for dose ${i + 1}`}>
            <Form.Control
              type="text"
              placeholder={`Age Range for dose ${i + 1}`}
              value={agerange[i] || ''}
              onChange={(e) => handleAgeRangeChange(i, e.target.value)}
              required
            />
          </FloatingLabel>
        </Col>
      );
    }
    return selects;
  };

  return (
    <div>
      <div className='container border p-3 shadow-lg w-75 rounded-3 container-sm mt-5 mb-3'>
        <div className='mb-4 d-flex justify-content-between align-items-center'>
          <h5 className=''>Add Vaccine</h5>
        </div>
        <Form onSubmit={submitForm}>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="floatingVaccineType" label="Vaccine Type">
                <Form.Control required type="text" placeholder="Vaccine Type" onChange={(e) => setVaccineType(e.target.value)} />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="floatingManufacturer" label="Manufacturer">
                <Form.Control required type="text" placeholder="Manufacturer" onChange={(e) => setManufacturer(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="floatingDosesRequired" label="Doses Required">
                <Form.Select required onChange={(e) => {
                  setDosesRequired(Number(e.target.value));
                  setAgerange(Array(Number(e.target.value)).fill(''));
                }}>
                  <option value="1">1 Dose</option>
                  <option value="2">2 Doses</option>
                  <option value="3">3 Doses</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="floatingDescription" label="Description">
                <Form.Control required type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            {renderAgeRangeSelects()}
          </Row>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="btn btn-success mt-3">Add Vaccine</Button>
            <Button href="/healthhome" className="btn btn-danger mt-3 ms-2">Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Addvaccine;
