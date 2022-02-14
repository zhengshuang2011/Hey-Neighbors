import React from 'react'

function UserInfo() {
  return (
    <div>
      <div className="sidebar__container">
        <div className="sidebar__head">
          <div className="sidebar__preview"><img className="sidebar__pic" src="img/user-1.jpg" alt="User" /></div>
          <div className="sidebar__wrap">
            <div className="sidebar__title">Vincent Moody</div>
            <div className="sidebar__text">UI/UX Designer</div>
          </div><button className="sidebar__action sidebar__action_toggle action"><i className="la la-angle-left "></i></button>
        </div>
        <div className="sidebar__inner">
          <div className="sidebar__section">
            {/* <!-- info--> */}
            <div className="info">
              <div className="info__section">
                <div className="info__title">About</div>
                <div className="info__body">
                  <div className="info__text">Color is so powerful that it can persuade, motivate, inspire and touch people’s soft spot the heart. This is the reason why understanding colors is pretty crucial in relating.</div>
                </div>
              </div>
              <div className="info__section">
                <div className="info__title">Members</div>
                <div className="info__body">
                  <div className="members">
                    <div className="members__item"><img className="members__pic" src="img/user-1.jpg" alt="User" /></div>
                    <div className="members__item"><img className="members__pic" src="img/user-2.jpg" alt="User" /></div>
                    <div className="members__item"><img className="members__pic" src="img/user-3.jpg" alt="User" /></div>
                    <div className="members__item"><button className="action action_stroke"><i className="la la-plus "></i></button></div>
                  </div>
                </div>
              </div>
              <div className="info__section">
                <div className="info__title">Contact details</div>
                <div className="info__body">
                  {/* <!-- contacts--> */}
                  <div className="contacts">
                    <div className="contacts__item">
                      <div className="contacts__icon"><i className="la la-envelope-open "></i></div>
                      <div className="contacts__detail">johanna.stevens@gmail.com</div>
                    </div>
                    <div className="contacts__item">
                      <div className="contacts__icon"><i className="la la-fax "></i></div>
                      <div className="contacts__detail">402-001-4477</div>
                    </div>
                    <div className="contacts__item">
                      <div className="contacts__icon"><i className="la la-globe-americas "></i></div>
                      <div className="contacts__detail">05 Otilia Brook Apt. 181</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info__section">
                <div className="info__title">Categories</div>
                <div className="info__body">
                  {/* <!-- tag group--> */}
                  <div className="tag-group">
                    <div className="tag gray">Designers</div>
                    <div className="tag gray">Employees</div>
                  </div>
                </div>
              </div>
              <div className="info__section">
                <div className="info__title">Overall progress</div>
                <div className="info__body">
                  <div className="info__cover">
                    <div className="info__stats">
                      <div className="info__subtitle">Tasks</div>
                      <div className="info__values"><strong>96</strong> / 148</div>
                    </div>
                    {/* <!-- progress--> */}
                    <div className="info__progress progress">
                      <div className="progress__value bg-red-raw" style="width: 30%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__section">
            <div className="history">
              <div className="history__container">
                <div className="history__head">
                  <div className="history__wrap">
                    <div className="history__title title title_sm">Conversion history</div>
                    <div className="history__text">Week to week performance</div>
                  </div><a className="history__link" href="#"><i className="la la-chart-area "></i></a>
                </div>
                <div className="history__chart">
                  <div id="chart-history-area"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo