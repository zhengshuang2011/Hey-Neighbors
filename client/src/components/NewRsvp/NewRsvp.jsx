import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rsvpimg from "../../assets/funpeople.svg"
import SendIcon from '@mui/icons-material/Send';
import "./NewRsvp.css"
import axios from "axios";

function NewRsvp({ event_id }) {
  const [email, setEmail] = useState("");
  const [people_number, setPeopleNumber] = useState("");
  const [vaccine, setVaccine] = useState(false);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify({
      email,
      people_number,
      vaccine,
      description,
    });
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`/api/applications/new/${event_id}`, values, {
        headers: headers,
      })
      .then((response) => {
        console.log("RSVP response", response, "RSVP values", values);
        navigate("/bookings");
      })
      .catch((err) => console.log(err));
  };

  const validateForm = () => {
    return (
      email.length > 0 &&
      people_number.length > 0 &&
      description.length > 0
    );
  };

  return (
    <div className="panel" autoComplete="false">
      <div className="panel__body">
        {/* form*/}
        <form className="event_form" action="" onSubmit={handleSubmit} >
          <div className="form__field upload rsvp_head">
            <img src={rsvpimg} alt="rsvp" className='rsvp_img' />
          </div>
          <h5 className="form_h"> Confirm RSVP</h5>
          <div className="form__row">
            <div className="form__col col-md-6">
              <div className="field form__field">
                <div className="field__label">Email</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="text"
                    name="guest_email"
                    required
                    minLength="4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter contact email"
                  />
                  <div className="field__icon">
                    <i className="la la-user " />
                  </div>
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">How many guests? </div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="number"
                    min="1"
                    value={people_number}
                    onChange={(e) => setPeopleNumber(e.target.value)}
                    placeholder="1"
                  />
                  <div className="field__icon">
                    <i className="la la-user " />
                  </div>
                </div>
              </div>
            </div>
            <div className="form__col col-md-3">
              <div className="field form__field">
                <div className="field__label">Are you vaccined?</div>
                <div className="field__wrap other_features">
                  <label className="switch auth__switch ">
                    <input
                      className="switch__input"
                      type="checkbox"
                      onClick={() => setVaccine(!vaccine)}
                    />
                    <span className="switch__content">Yes, I am.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <h5 className="form_h"> Message the host</h5>
          <div className="form__row">
            <div className="field form__field col-md-8 ">
              <textarea className='message_host' name="Text1"
                cols="60"
                rows="5"
                placeholder='Hi....'
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button className="rsvp_button" disabled={!validateForm}>
              <span>Confirm and Submit </span>
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRsvp;