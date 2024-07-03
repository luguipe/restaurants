// import Link from "next/link";

// export const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <Link href="/" className="navbar-brand">Home</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link href="/" className="nav-link active" aria-current="page">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/" className="nav-link" aria-current="page">Signin</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/" className="nav-link" aria-current="page">Signup</Link>
//                         </li>
//                         {/* <li className="nav-item">
//                             <span className="nav-link disabled" aria-disabled="true">Disabled</span>
//                         </li> */}
//                     </ul>
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// };

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Form from 'react-bootstrap/Form'


export const  Navbar1 = () => {
  return (
    <Navbar aria-controls="navbarScroll">
       {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse> */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/restaurants" aria-current="page">
            Restaurants
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  color="foreground" href="/meals">
            Meals
          </Link>
        </NavbarItem>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button color="primary" variant="ghost">Search</Button>
          </Form>
      </NavbarContent>
      <NavbarContent justify="end">
       <NavbarItem>
          <Button as={Link} color="primary" variant="ghost" href="/users/signup" >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}  color="primary" variant="ghost" href="/users/signin" >
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
