'use client';
import { useQuery } from "@apollo/client";
import React from "react";
import {Input} from "@nextui-org/react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

const UserSignUpPage = () => {

    // if(loading) return <div> Loading...</div>

    // if(error) return <div> Error...</div>


    return  (
  <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </Form>
      </Card>
    </div>
  );
};

export default UserSignUpPage;