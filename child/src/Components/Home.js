import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
function Home() {
  return (
//     <div>
//  <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Child Vaccination</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav"> 
//           <Nav className="me-auto">
//             <Nav.Link href="/helthcarereg">Helthcare Registration</Nav.Link>
//             <Nav.Link href="/parentreg">parent Registration</Nav.Link>
           
            
//           </Nav>

//           <Nav>
          
//           <a href='/login'  className='btn btn-warning'>LogIn</a>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar> 
         
//     </div>

<div className="homepage-container">
<header className="header">
  <div className="logo">Vaccination Management</div>
  <nav className="nav">
    <ul>
      <li>
        <a href="/helthcarereg">Helthcare Registration</a>
      </li>
     
      <li>
        <a href="/parentreg">Parent Registration</a>
      </li>
     
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </ul>
  </nav>
</header>

<section id="overview" className="section overview-section">
  <div className="content">
    <h1>Welcome to the Child Vaccination Management System</h1>
    <p>
      We help you manage and track your child's vaccinations effortlessly,
      ensuring they stay healthy and protected.
    </p>
  </div>
</section>

<section id="benefits" className="section benefits-section">
  <div className="content">
    <h2>Benefits of Vaccination</h2>
    <div className="benefits">
      <div className="benefit-item">
        <h3>Protection</h3>
        <p>Vaccinations protect your child from serious diseases.</p>
      </div>
      <div className="benefit-item">
        <h3>Community Health</h3>
        <p>
          Immunizing your child helps protect the community by preventing
          the spread of diseases.
        </p>
      </div>
      <div className="benefit-item">
        <h3>Cost-Effective</h3>
        <p>Preventing disease is much cheaper than treating it.</p>
      </div>
    </div>
  </div>
</section>

<section id="schedule" className="section schedule-section">
  <div className="content">
    <h2>Vaccination Schedule</h2>
    <p>
      Follow our recommended schedule to keep your child on track with
      their immunizations.
    </p>
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Age</th>
          <th>Vaccine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Birth</td>
          <td>Hepatitis B</td>
        </tr>
        <tr>
          <td>2 months</td>
          <td>DTP, Hib, Polio, Hepatitis B</td>
        </tr>
        <tr>
          <td>4 months</td>
          <td>DTP, Hib, Polio</td>
        </tr>
        <tr>
          <td>6 months</td>
          <td>DTP, Hib, Polio, Hepatitis B</td>
        </tr>
        <tr>
          <td>12 months</td>
          <td>MMR, Chickenpox</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="testimonials" className="section testimonials-section">
  <div className="content">
    <h2>Testimonials</h2>
    <div className="testimonials">
      <div className="testimonial">
        <p>
          "This system has made it so easy to keep track of my child's
          vaccinations. Highly recommend!"
        </p>
        <p>- Parent A</p>
      </div>
      <div className="testimonial">
        <p>
          "A great tool for ensuring my children are up-to-date with their
          immunizations."
        </p>
        <p>- Parent B</p>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="section contact-section">
  <div className="content">
    <h2>Contact Us</h2>
    <p>
      If you have any questions or need further information, please reach
      out to us.
    </p>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

<footer className="footer">
  <p>&copy; 2024 Vaccination Management. All rights reserved.</p>
</footer>
</div>
  )
}

export default Home
