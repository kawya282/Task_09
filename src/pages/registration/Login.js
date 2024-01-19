import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import SubFooter from '../../components/footer/SubFooter';
import SubNavigation from '../../components/navbar/SubNavigation';
import SignUp from './SignUp';


function Login({ handleClose}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your login logic here
      // Close the modal after successful login
      handleClose();
    };

  return (
    <div>
      <SubNavigation/>
      <Container fluid style={{backgroundImage:'url("https://img.freepik.com/premium-photo/pink-wipe-smoke-cloud-abstract-mystic-freeze-motion-diffusion-background_756527-6963.jpg")',backgroundSize:'cover',height:'80vh'}}>
        <Row>
            <Col xs={12} md={12} xl={6} className='mx-auto w-40 my-auto px-3 pt-2' style={{backgroundColor:'rgba(256,256,,256,0.1)',height:'auto',borderRadius:'15px'}}>
              <h3 className='mb-3'>LOGIN FORM</h3>
                <Form>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Button variant="contained" color="success" size="medium">Login</Button>
                </Form>
            </Col>   
            <Col xs={12} md={12} xl={6} className='mx-auto w-40 my-auto' style={{backgroundColor:'rgba(256,256,,256,0.1)',height:'auto',padding:'25px',borderRadius:'15px'}}>
            <h3 className='mb-3'>SIGN UP FORM</h3>
                <SignUp/>
            </Col>
        </Row> 
      </Container> 
      <SubFooter/>
    </div>
  )
}

export default Login

