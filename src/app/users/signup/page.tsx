
'use client';
import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import { Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SIGN_IN_MUTATION = gql`
  mutation UserSignIn($input: UserSignInInput!) {
    userSignIn(input: $input) {
      _id
      email
      firstName
      lastName
      dob
      active
    }
  }
`;

const UserSignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [userSignIn, { data, loading, error }] = useMutation(SIGN_IN_MUTATION);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userSignIn({
        variables: { input: formData }
      });
      console.log('User signed in successfully:', data);
      // Handle successful sign-in (e.g., redirect to another page)
    } catch (err) {
      console.error('Error signing in:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <Form onSubmit={handleSubmit}>
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

export default UserSignInPage;

// 'use client';
// import { useQuery } from "@apollo/client";
// import React from "react";
// import {Input} from "@nextui-org/react";
// import { Card } from "react-bootstrap";
// import { Form } from "react-bootstrap";

// const UserSignUpPage = () => {

//     // if(loading) return <div> Loading...</div>

//     // if(error) return <div> Error...</div>


//     return  (
//   <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
//         <Form>
//           <Form.Group className="mb-3" controlId="formGroupEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formGroupPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//           <button className="btn btn-primary w-100" type="submit">
//             Login
//           </button>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default UserSignUpPage;