// import axios from 'axios';
// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Card from 'react-bootstrap/Card';



// function Parenthomepage() {
// const[vaccinedata,setvaccinedata]=useState([])
// const fetchvaccinedetails=async()=>{
//   try {
//     const response= await axios.get('http://localhost:8000/vaccinedel')
// setvaccinedata(response.data)
//   } catch (error) {
//     console.log(error);
//   }
// }

// useState(()=>{
//   fetchvaccinedetails()
// },[])

// console.log(vaccinedata);

//   return (
//     <div>
//        <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Child Vaccination</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/childreg">Child Registration</Nav.Link>
//           </Nav>

//           <Nav>
          
//           <a href='/'  className='btn btn-warning'>Logout</a>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>


//     <div>
//       Availabe vaccines
//       <div>
// {vaccinedata.map((items)=>(
//   <div>
//     {items.vaccinetype}
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Card.Link href="#">Book Now</Card.Link>
    
//       </Card.Body>
//     </Card>

//   </div>
// ))}
//       </div>
//     </div>

//     </div>
//   )
// }

// export default Parenthomepage



import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

function Parenthomepage() {
  const [vaccinedata, setvaccinedata] = useState([]);
  
  const fetchvaccinedetails = async () => {
    try {
      const response = await axios.get('http://localhost:8000/vaccinedel');
      setvaccinedata(response.data);
    } catch (error) {
      console.log(error);
    }

  };

  const booknow =(vaccineid,healthid)=>{
    localStorage.setItem('vaccineid',vaccineid)
    localStorage.setItem('healthid',healthid)

  }

  useEffect(() => {
    fetchvaccinedetails();
  }, []);

  console.log(vaccinedata);

  return (
    <div>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Child Vaccination</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/childreg">Child Registration</Nav.Link>
            </Nav>
            <Nav>
              <a href='/' className='btn btn-warning'>Logout</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <h2 className="available-vaccines-title">Available vaccines</h2>
        <div className="card-container">
          {vaccinedata.map((item) => (
            <div key={item.id} className="card-item">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.vaccinetype}</Card.Title>
                  <Card.Text>Manufacture: {item.manufacturer}</Card.Text>
                  <Card.Text>Doses Required: {item.dosesrequired}</Card.Text>
                  <Card.Text>Age Range for 1st: {item.agerange[0]}</Card.Text>
                  <Card.Text>Age Range for 2nd: {item.agerange[1]}</Card.Text>

                  <Card.Text>Description: {item.description}</Card.Text>
                  <Button variant="primary" onClick={()=> booknow(item._id,item.healthid)}   href="/childreg">Book Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parenthomepage;
