import React from "react";
import './landing.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <section className="hero-section bg-cover">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>Find and Create
                            a great experience </h1>
                        <h1 className="near-you scale-up-center" style={{ color: '#00AF91' }}>Near You</h1>

                        <div className="form-group">

                            <button type="button" ><Link style={{
                                color: 'white', textDecoration: 'none',
                            }} to="/Home" >Explore </Link></button>

                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}