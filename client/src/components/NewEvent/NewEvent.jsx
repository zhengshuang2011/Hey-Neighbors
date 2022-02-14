import React from 'react'

function NewEvent() {
  return (

    <div className="panel">
      <div className="panel__body">
        {/* settings*/}
        <div className="settings">
          <div className="settings__container">
            <div className="settings__inner">
              <div className="settings__tab">
                {/* form*/}
                <div className="form form_settings">
                  {/* upload*/}
                  <div className="form__field upload"><input className="upload__input" type="file" />{/* caption*/}
                    <div className="upload__caption caption"><i className="la la-cloud-upload-alt " />Upload Image</div>
                  </div>
                  <div className="form__row">
                    <div className="form__col">
                      <div className="field form__field">
                        <div className="field__label">Full name</div>
                        <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                          <div className="field__icon"><i className="la la-user " /></div>
                        </div>
                      </div>
                    </div>
                    <div className="form__col">
                      <div className="field form__field">
                        <div className="field__label">Role</div>
                        <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                          <div className="field__icon"><i className="la la-user-cog " /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__col">
                      <div className="field form__field">
                        <div className="field__label">Email</div>
                        <div className="field__wrap"><input className="field__input" type="email" placeholder="Start typing…" />
                          <div className="field__icon"><i className="la la-envelope " /></div>
                        </div>
                      </div>
                    </div>
                    <div className="form__col">
                      <div className="field form__field">
                        <div className="field__label">Phone</div>
                        <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                          <div className="field__icon"><i className="la la-fax " /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field form__field">
                    <div className="field__label">Address line</div>
                    <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                      <div className="field__icon"><i className="la la-city " /></div>
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__col">
                      <div className="field form__field">
                        <div className="field__label">Language</div>
                        <div className="field__wrap"><select className="field__select">
                          <option disabled selected>Select language</option>
                          <option>English</option>
                          <option>Chinese</option>
                          <option>Spanish</option>
                        </select>
                          <div className="field__icon"><i className="la la-angle-down " /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="settings__foot">
                <div className="settings__btns"><button className="settings__btn btn">Update Settings</button><button className="settings__btn btn btn_light mobile-hide">Cancel</button></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEvent