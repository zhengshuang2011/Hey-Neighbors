import React, { useState, useEffect } from "react";
import "./NewEventForm.css";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import axios from "axios";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

function NewEventForm({ setUpload }) {
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
  const [locationlatitude, setLocationLatitude] = useState(null);
  const [locationlongitude, setLocationLongitude] = useState(null);
  const [category_id, setCategory] = useState();
  const [max_people_number, setMaxParticipant] = useState("");
  const [description, setDescription] = useState("");
  const [photo_image, setPhoto] = useState(null);
  const [mask, setMask] = useState(false);
  const [vaccine, setVaccine] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState();

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    const fileName = `${e.target.files[0].name}`;
    setPhoto(`/images/${fileName}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileData = new FormData();
    fileData.append("file", file);

    const values = JSON.stringify({
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
      locationlatitude,
      locationlongitude,
      category_id,
      max_people_number,
      description,
      photo_image,
      mask,
      vaccine,
    });
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("/upload", fileData)
      .then(
        axios.post("/api/events", values, {
          headers: headers,
        })
      )
      .then((response) => {
        console.log("response", response, "values", values);
        setError();
        setUpload(true);
      })
      .catch((err) => {
        console.log(err);
        setError("Something is wrong, Please check your input");
      });
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
      post_code.length > 0 &&
      max_people_number != null &&
      photo_image != null
    );
  };

  //console.log(file);

  const {
    ready,
    value,
    suggestions: { status, data },
    clearSuggestions,
    setValue,
  } = usePlacesAutocomplete();

  // console.log(
  //   "ready is ",
  //   ready,
  //   " values is ",
  //   value,
  //   "status",
  //   status,
  //   "data is",
  //   data
  // );

  useEffect(() => {
    const addrArray = value.split(",");
    if (addrArray.length === 4) {
      setAddress(addrArray[0].trim());
      setCity(addrArray[1].trim());
      setProvince(addrArray[2].trim());
      setCountry(addrArray[3].trim());
    }
  }, [value]);

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("📍 Coordinates: ", { lat, lng });
          setLocationLatitude(lat);
          setLocationLongitude(lng);
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  //console.log("google map is", window.google.maps);
  // const handleFileSelect = (e) => {
  //   console.log(e.target.files[0]);
  // };

  return (
    <div className="panel" autoComplete="false">
      <div className="panel__body">
        {/* form*/}
        <form className="event_form" action="" onSubmit={handleSubmit}>
          <h5 className="form_h">Event Details</h5>

          <div className="form__row">
            <div className="form__col col-md-8">
              <div className="field form__field">
                <div className="field__label">Event Name</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="text"
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
                    required
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
                    style={{
                      color: "#8484A3",
                      fontWeight: 300,
                      fontSize: "small",
                    }}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                    required
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
                    style={{
                      color: "#8484A3",
                      fontWeight: 300,
                      fontSize: "small",
                    }}
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
                    required
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
                <div ref={ref} className="field__wrap">
                  <input
                    className="field__input"
                    type="text"
                    value={address}
                    onChange={(e) => {
                      console.log("record address change ", e.target.value);
                      setValue(e.target.value);
                      setAddress(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder="e.g '123 Yonge Street'"
                    required
                  />
                  {status === "OK" && <ul>{renderSuggestions()}</ul>}
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
                    required
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
                    required
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
                    required
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
                  <select
                    style={{
                      color: "#8484A3",
                      fontWeight: 300,
                      fontSize: "small",
                    }}
                    className="field__select"
                    onChange={(e) => setCategory(Number(e.target.value))}
                    required
                  >
                    <option disabled selected>
                      Select event category
                    </option>
                    <option value="1">Food</option>
                    <option value="2">Game</option>
                    <option value="3">Kids</option>
                    <option value="4">Study</option>
                    <option value="5">Movies</option>
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

          {/* <Box
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
            </Box> */}

          <div className="form__row">
            <div className="form__col col-md-6">
              <div className="field form__field">
                <div className="field__label">Event Description</div>
                <div className="field__wrap">
                  <textarea
                    className="description field__input"
                    name="Event Description"
                    cols="60"
                    rows="8"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="form__field upload col-md-5 ">
              <input
                className="upload__input"
                type="file"
                onChange={handleFileUpload}
                required
              />
              {/* caption*/}
              <div className="upload__caption caption">
                <i className="la la-cloud-upload-alt " />
                Upload Image
                {photo_image && (
                  <span className="image">Image has been selected</span>
                )}
              </div>
            </div>
          </div>

          {/* upload*/}
          <div className="create_button">
            <button className="btn_light create" disabled={!validateForm}>
              Create Events
            </button>{" "}
            {/* <button className="
               btn_light mobile-hide cancel" onClick={handleCancel}>Cancel</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default NewEventForm;
