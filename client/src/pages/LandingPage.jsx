import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import LandingPageVideo from "../assets/LandingPageVideo.mp4";

export default function LandingPage() {
  return (
    <section className="hero-section bg-cover">
      <video
        className="video-hero-section"
        autoPlay
        loop
        muted
        src={LandingPageVideo}
        type="video/mp4"
      ></video>
      <div className="container-hero">

        <div className="content-hero">

          <div className="left-side">
            <div className="blockquote-wrapper">
              <div className="blockquote">
                <h1>
                  <span style={{ color: "white" }}> Hey</span><span style={{ color: "#92a5ef" }}> Neighbors!</span></h1>
                <h1 style={{ color: "white" }}>
                  Let's hang out together.
                </h1>
                <h4 style={{ color: "white" }}>Find and create events near you</h4>
              </div>
              <div className="form-group">
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/signin"
                >
                  <button
                    type="button"
                    style={{
                      width: "165px",
                      marginRight: "50px",
                    }}
                  >
                    SignIn
                  </button>
                </Link>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/home"
                >
                  <button
                    type="button"
                    style={{
                      width: "165px",
                    }}
                  >
                    Explore
                  </button>
                </Link>
              </div>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
