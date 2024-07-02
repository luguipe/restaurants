import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className="nav-link" aria-current="page">Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className="nav-link" aria-current="page">Signup</Link>
                        </li>
                        {/* <li className="nav-item">
                            <span className="nav-link disabled" aria-disabled="true">Disabled</span>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


// export default function App() {
//   return (
//     <Navbar>
//       <NavbarBrand>

//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
