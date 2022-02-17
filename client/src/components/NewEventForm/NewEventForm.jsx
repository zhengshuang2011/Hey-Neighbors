import React, { useState } from "react";
import "./NewEventForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

function NewEventForm() {
  const [event_name, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [start_at, setStartAt] = useState("");
  const [duration, setDuration] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [post_code, setPostalCode] = useState("");
  const [category_id, setCategory] = useState("");
  const [max_people_number, setMaxParticipant] = useState("");
  const [description, setDescription] = useState("");
  const [photo_image, setPhoto] = useState(null);
  const [mask, setMask] = useState(false);
  const [vaccine, setVaccine] = useState(false);
  const handleSubmit = () => {
    const values = {
      event_name,
      date,
      start_at,
      duration,
      address,
      address2,
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
    };
    axios
      .post("http://localhost:8000/api/events", values)
      .then(console.log(values))
      .catch((err) => console.log(err));
  };
  const validateForm = () => {
    return (
      event_name.length > 0 &&
      date.length > 0 &&
      start_at.length > 0 &&
      duration.length > 0 &&
      address.length > 0 &&
      address2.length > 0 &&
      city.length > 0 &&
      province.length > 0 &&
      country.length > 0 &&
      post_code.length > 0
    );
  };
  // const handleCancel = () => {
  //   setEvenet
  // }
  return (
    <div className="panel">
      <div className="panel__body">
        {/* form*/}
        <form className="event_form" action="" onSubmit={handleSubmit}>
          <div className="form__field upload">
            <input className="upload__input" type="file" />
            {/* caption*/}
            <div className="upload__caption caption">
              <i className="la la-cloud-upload-alt " />
              Upload Image
            </div>
          </div>
          <h5>Event Details</h5>
          <div className="form__row">
            <div className="form__col col-md-8">
              <div className="field form__field">
                <div className="field__label">Event Name</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    name="event_name"
                    required
                    minLength="4"
                    value={event_name}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="e.g'Hiking in Queenstown Mountain'"
                  />
                  <div className="field__icon">
                    <i className="la la-user " />
                  </div>
                </div>
              </div>
            </div>
            <div className="form__col col-md-4">
              <div className="field form__field">
                <div className="field__label">Max Participant </div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="number"
                    min="2"
                    value={max_people_number}
                    onChange={(e) => setMaxParticipant(e.target.value)}
                    placeholder="2"
                  />
                  <div className="field__icon">
                    <i className="la la-user " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form__row">
            <div className="form__col col-md-4">
              <div className="field form__field">
                <div className="field__label">Date</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                  />
                </div>
              </div>
            </div>
            <div className="form__col col-md-4">
              <div className="field form__field">
                <div className="field__label">Start At </div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="time"
                    value={start_at}
                    onChange={(e) => setStartAt(e.target.value)}
                    placeholder="Start Time"
                  />
                </div>
              </div>
            </div>
            <div className="form__col col-md-4">
              <div className="field form__field">
                <div className="field__label">Duration </div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration"
                  />
                  <div className="field__icon">
                    <div className="field__label">hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form__row">
            <div className="form__col col-md-8">
              <div className="field form__field">
                <div className="field__label">Address line</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g '123 Yonge Street'"
                  />
                  <div className="field__icon">
                    <i className="la la-city " />
                  </div>
                </div>
              </div>
            </div>
            <div className="form__col col-md-4">
              <div className="field form__field">
                <div className="field__label">Apt/Room</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="text"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    placeholder="e.g 'Apt.1234' "
                  />
                  <div className="field__icon">
                    <i className="la la-city " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form__row">
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">City</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City Name"
                  />
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Province</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="e.g 'ON'"
                  />
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Country </div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g 'Canada'"
                  />
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Postal Code </div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    value={post_code}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form__row">
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Category</div>
                <div className="field__wrap">
                  <select className="field__select">
                    <option disabled selected>
                      Select event category
                    </option>
                    <option value={category_id} onClick={() => setCategory(1)}>
                      Food
                    </option>
                    <option value={category_id} onClick={() => setCategory(2)}>
                      Game
                    </option>
                    <option value={category_id} onClick={() => setCategory(3)}>
                      Kids
                    </option>
                    <option value={category_id} onClick={() => setCategory(4)}>
                      Study
                    </option>
                    <option value={category_id} onClick={() => setCategory(5)}>
                      Movies
                    </option>
                  </select>
                  <div className="field__icon">
                    <i className="la la-angle-down " />
                  </div>
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Other Features</div>
                <div className="field__wrap other_features">
                  <label className="switch auth__switch ">
                    <input
                      className="switch__input"
                      type="checkbox"
                      onClick={() => setMask(!mask)}
                    />
                    <span className="switch__content">Require Mask</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Other Features</div>
                <div className="field__wrap other_features">
                  <label className="switch auth__switch">
                    <input
                      className="switch__input"
                      type="checkbox"
                      onClick={() => setVaccine(!vaccine)}
                    />
                    <span className="switch__content">Require Vaccined</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="field form__field">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="standard"
              />
            </Box>
          </div>
          {/* upload*/}
          <div className="">
            <div className="">
              <button className="btn_light create" disabled={!validateForm}>
                Create Events
              </button>
              {/* <button className="
               btn_light mobile-hide cancel" onClick={handleCancel}>Cancel</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default NewEventForm;
