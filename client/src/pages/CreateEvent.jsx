import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import CreateEventStyle from './CreateEvent.css';
import axios from 'axios';
//import Map from '../components/Map/Map';

function CreateEvent() {

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [startAt, setStartAt] = useState("");
  const [duration, setDuration] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [category, setCategory] = useState("");
  const [maxParticipant, setMaxParticipant] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [mask, setMask] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [status, setStatus] = useState(true);

  const values = { eventName, date, startAt, duration, streetNo, street, city, province, country, postalCode, category, maxParticipant, description, photo, mask, vaccine, status }

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/events", values)
      .then(console.log(values))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div id="createEvent" >
        <form onSubmit={event => {
          event.preventDefault()
          handleSubmit()
        }}>
          <h1>Create Your Event</h1>

          <h3>Upload Photos</h3>
          <h4>Drag or choose your file to upload</h4>
          <input type="url" name="url" id="url"
            placeholder="PNG, GIF, WEBP, MP4 - Max 500Mb"
            pattern="https://.*" className="photoBar" value={photo} onChange={(e) => setPhoto(e.target.value)} size="30"
            required />
          <h3>Event Details</h3>
          <h4>Event Name</h4>
          <div className="eventName">
            <input value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="e.g'Hiking in Queenstown Mountain'" />
          </div>
          <div className="timeSection">
            <div>
              <h4>Date</h4>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Start Time" />
            </div>
            <div>
              <h4>Start At</h4>
              <input type="time" value={startAt} onChange={(e) => setStartAt(e.target.value)} placeholder="End Time" />
            </div>
            <div>
              <h4>Duration</h4>
              <input type="number" min="1" value="duration" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
            </div>
          </div>
          <h4>Address</h4>
          <div className="streetCitySection">
            <div>
              <h4>Street No.</h4>
              <input type="number" min="1" value={streetNo} onChange={(e) => setStreetNo(e.target.value)} placeholder="" />
            </div>
            <div>
              <h4>Street</h4>
              <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Yonge Street" />
            </div>
            <div>
              <h4>City</h4>
              <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ottawa" />
            </div>
          </div>
          <div className="stateCountryPostalSection">
            <div>
              <h4>Province</h4>
              <input value={province} onChange={(e) => setProvince(e.target.value)} placeholder="ON" />
            </div>
            <div>
              <h4>Country</h4>
              <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Canada" />
            </div>
            <div>
              <h4>Postal Code</h4>
              <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="" />
            </div>
          </div>
          <div className="description">
            <h4>Description</h4>
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g'Spectacular views of Queenstown'" />
          </div>
          <div className="eventDetails">
            <div>
              <h4>Max Participant</h4>
              <input type="number" min="2" value={maxParticipant} onChange={(e) => setMaxParticipant(e.target.value)} placeholder="2" />
            </div>
            <div>
              <h4>Category</h4>
              <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Game" />
            </div>
            <div className="dropdown">
              <button className="dropbtn">Category</button>
              <div className="dropdown-content">
                <a value={category} onClick={(e) => setCategory(1)} href="#">Food</a>
                <a value={category} onClick={(e) => setCategory(2)} href="#">Game</a>
                <a value={category} onClick={(e) => setCategory(3)} href="#">Kids</a>
                <a value={category} onClick={(e) => setCategory(4)} href="#">Study</a>
              </div>
            </div>

          </div>

          <h4>Other Features</h4>
          <div className="otherFeatures">
            <div className="checkboxTitle">
              <div className="checkbox" checked="checked">
                <label for="Vaccine">Vaccine</label>
                <input type="checkbox" value={vaccine} onClick={(e) => setVaccine(true)} />
                <span className="checkmark"></span>
              </div>
              <div className="checkbox" checked="checked">
                <label for="Mask">Mask</label>
                <input type="checkbox" value={mask} onClick={(e) => setMask(true)} />
                <span className="checkmark"></span>
              </div>
            </div>
          </div>
          <input type="submit" value="Send Request" ></input>
        </form>
      </div>
    </>
  )
}

export default CreateEvent