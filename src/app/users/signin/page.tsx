'use client';
import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SIGN_UP_MUTATION = gql`
  mutation UserSignUp($input: UserSignUpInput!) {
    userSignUp(input: $input) {
      _id
      email
      firstName
      lastName
      dob
      active
    }
  }
`;

const UserSignUpPage = () => {
  const [formData, setFormData] = useState({
    _id: '',
    active: false,
    dob: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const [userSignUp, { data, loading, error }] = useMutation(SIGN_UP_MUTATION);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userSignUp({
        variables: { input: formData }
      });
      console.log('User signed up successfully:', data);
      // Handle successful sign-up (e.g., redirect to another page)
    } catch (err) {
      console.error('Error signing up:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="_id"
              value={formData._id}
              onChange={handleChange}
              placeholder="Enter ID"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupActive">
            <Form.Label>Active</Form.Label>
            <Form.Check
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
              label="Active"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Enter Date of Birth"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <button className="btn btn-primary w-100" type="submit">
            Sign Up
          </button>
        </Form>
      </Card>
    </div>
  );
};

export default UserSignUpPage;

// 'use client';
// import { useQuery } from "@apollo/client";
// import React from "react";
// import { Form, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserSignInPage = () => {

//     return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
//         <Form>
//             <Form.Group className="mb-3" controlId="formGroupFirstName">
//              <Form.Label>First Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter First Name" />
//              </Form.Group>
//             <Form.Group className="mb-3" controlId="formGroupLastName">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Last Name" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formGroupId">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formGroupDob">
//                 <Form.Label>Date of Birth</Form.Label>
//                 <Form.Control type="date" placeholder="Enter Date of Birth" />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formGroupPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <button className="btn btn-primary w-100" type="submit">
//                 Sign Up
//             </button>
//         </Form>
//       </Card>
//     </div>
//   );
// };



// export default UserSignInPage;