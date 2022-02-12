import React from "react";
import { Link } from "react-router-dom";
 
export default function Navbar() {
    return (
        <nav>

            <h2>HeyNeighbor</h2>

            <Link to = "/" >Landing Page</Link>
            <Link to = "/signIn" >Sign In</Link>
            <Link to = "/register" >Register</Link>

        </nav>
    )
}