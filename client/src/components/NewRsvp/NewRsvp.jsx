import React from 'react'
import rsvpimg from "../../assets/RSVP.png"
import SendIcon from '@mui/icons-material/Send';
import "./NewRsvp.css"


function NewRsvp({ user, event }) {

  return (
    <div className="panel" autoComplete="false">
      <div className="panel__body">
        {/* form*/}
        <form className="event_form" action="" >
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
                    name="event_name"
                    required
                    minLength="4"
                    // value={event_name}
                    // onChange={(e) => setEventName(e.target.value)}
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
                    // value={max_people_number}
                    // onChange={(e) => setMaxParticipant(e.target.value)}
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
                    //   onClick={() => setVaccine(!vaccine)}
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
              <textarea className='message_host' name="Text1" cols="60" rows="5" placeholder='Hi....'> </textarea>
            </div>
            <button className="rsvp_button">
              <span>Confirm and Submit </span>
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRsvp