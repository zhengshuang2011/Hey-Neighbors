import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import CreateEventStyle from "./CreateEvent.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Siderbar/Sidebar";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import Map from "../components/Map/Map";

function CreateEvent() {
  const [event_name, setEvent_name] = useState("");
  const [date, setDate] = useState("");
  const [start_at, setStart_at] = useState("");
  const [duration, setDuration] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [post_code, setPost_code] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [max_people_number, setMax_people_number] = useState("");
  const [description, setDescription] = useState("");
  const [photo_image, setPhoto_image] = useState(null);
  const [mask, setMask] = useState(false);
  const [vaccine, setVaccine] = useState(false);
  const [status, setStatus] = useState(true);

  //const photoTypes = ["JPEG", "PNG", "GIF"];

  // const convertImageTobase64 = (file) => {
  //   const reader = new FileReader();
  //   reader.onloadend = function () {
  //     console.log("RESULT", reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // }

  /*const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChange = async (files) => {
    const base64ImageString = await toBase64(files[0]);
    setPhoto(base64ImageString.toString());
  };*/

  const handleSubmit = () => {
    const values = {
      event_name,
      date,
      start_at,
      duration,
      address,
      street,
      city,
      province,
      country,
      post_code,
      category_id,
      max_people_number,
      description,
      photo_image,
      mask,
      vaccine,
      status,
    };

    axios
      .post("http://localhost:8000/api/events", values)
      .then(console.log(values))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Sidebar />
      <div id="createEvent">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <h1>Create Your Event</h1>

          <h3>Upload Photos</h3>
          <h4>Drag or choose your file to upload</h4>
          <div className="photoBar">
            <input
              type="url"
              placeholder="Put your photo link inside here"
              value={photo_image}
              onChange={(e) => setPhoto_image(e.target.value)}
              required
            />

            {/*<FileUploader
              value={photo}
              multiple={true}
              handleChange={handleChange}
              name="photo"
              types={photoTypes}
            />*/}
          </div>
          <h3>Event Details</h3>
          <h4>Event Name</h4>
          <div className="eventName">
            <input
              name="event_name"
              required
              minLength="4"
              value={event_name}
              onChange={(e) => setEvent_name(e.target.value)}
              placeholder="e.g'Hiking in Queenstown Mountain'"
            />
          </div>
          <div className="timeSection">
            <div>
              <h4>Date</h4>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Start Time"
              />
            </div>
            <div>
              <h4>Start At</h4>
              <input
                type="time"
                value={start_at}
                onChange={(e) => setStart_at(e.target.value)}
                placeholder="End Time"
              />
            </div>
            <div>
              <h4>Duration</h4>
              <input
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Duration"
              />
            </div>
          </div>
          <h4>Address</h4>
          <div className="streetCitySection">
            <div>
              <h4>Street No.</h4>
              <input
                type="number"
                min="1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <h4>Street</h4>
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Yonge Street"
              />
            </div>
            <div>
              <h4>City</h4>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ottawa"
              />
            </div>
          </div>
          <div className="stateCountryPostalSection">
            <div>
              <h4>Province</h4>
              <input
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder="ON"
              />
            </div>
            <div>
              <h4>Country</h4>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Canada"
              />
            </div>
            <div>
              <h4>Postal Code</h4>
              <input
                value={post_code}
                onChange={(e) => setPost_code(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="description">
            <h4>Description</h4>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g'Spectacular views of Queenstown'"
            />
          </div>
          <div className="eventDetails">
            <div>
              <h4>Max Participant</h4>
              <input
                type="number"
                min="2"
                value={max_people_number}
                onChange={(e) => setMax_people_number(e.target.value)}
                placeholder="2"
              />
            </div>
            <div className="dropdown">
              <button className="dropbtn">Category</button>
              <div className="dropdown-content">
                <a
                  value={category_id}
                  onClick={(e) => setCategory_id(1)}
                  href="#"
                >
                  Food
                </a>
                <a
                  value={category_id}
                  onClick={(e) => setCategory_id(2)}
                  href="#"
                >
                  Game
                </a>
                <a
                  value={category_id}
                  onClick={(e) => setCategory_id(3)}
                  href="#"
                >
                  Kids
                </a>
                <a
                  value={category_id}
                  onClick={(e) => setCategory_id(4)}
                  href="#"
                >
                  Study
                </a>
              </div>
            </div>
          </div>

          <h4>Other Features</h4>
          <div className="otherFeatures">
            <div className="checkboxTitle">
              <div className="checkbox" checked="checked">
                <label htmlFor="Vaccine">Vaccine</label>
                <input
                  type="checkbox"
                  value={vaccine}
                  onClick={(e) => setVaccine(e.target.checked)}
                />
                <span className="checkmark"></span>
              </div>
              <div className="checkbox" checked="checked">
                <label htmlFor="Mask">Mask</label>
                <input
                  type="checkbox"
                  value={mask}
                  onClick={(e) => setMask(e.target.checked)}
                />
                <span className="checkmark"></span>
              </div>
            </div>
          </div>
          <div className="mapSection">
            <Map></Map>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
