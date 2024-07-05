'use client';
import { useQuery } from "@apollo/client";
import React from "react";
import { Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserSignInPage = () => {

    return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupFirstName">
             <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
             </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupId">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter Date of Birth" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button className="btn btn-primary w-100" type="submit">
                Sign Up
            </button>
        </Form>
      </Card>
    </div>
  );
};



export default UserSignInPage;