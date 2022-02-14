import React from 'react'
// import UserInfo from './UserInfo'



function Sidebar() {
  return (
    <div>
      <div className="sidebar js-sidebar extended">
        <div className="sidebar__nav">
          {/* <!-- nav--> */}
          <nav className="nav js-nav "><a className="nav__link nav__link_head" href="/">
            <div className="nav__preview"><img className="nav__pic" src="img/logo.svg" alt="Logo" /></div>
            <div className="nav__title"><img className="nav__pic" src="img/betaCRM.svg" alt="betaCRM" /></div>
          </a>
            <div className="nav__list">
              {/* <!-- mobile primary menu--> */}
              <div className="nav__primary js-nav-primary">
                <div className="nav__group"><a className="nav__link active" href="#" title="Home">
                  <div className="nav__preview"><i className="la la-tachometer-alt "></i></div>
                  <div className="nav__title">Home</div>
                </a><a className="nav__link" href="#" title="Projects">
                    <div className="nav__preview"><i className="la la-toolbox "></i></div>
                    <div className="nav__title">Projects</div>
                  </a><a className="nav__link" href="#" title="My Event">
                    <div className="nav__preview"><i className="la la-clipboard-check "></i></div>
                    <div className="nav__title">My Event</div>
                  </a><a className="nav__link" href="#" title="Kanban">
                    <div className="nav__preview"><i className="la la-images "></i></div>
                    <div className="nav__title">Kanban</div>
                  </a><a className="nav__link" href="#" title="Calendar">
                    <div className="nav__preview"><i className="la la-calendar-week "></i></div>
                    <div className="nav__title">Calendar</div>
                  </a><a className="nav__link nav__link_menu js-nav-link-menu" href="#">
                    <div className="nav__preview"><i className="la la-bars "></i></div>
                  </a></div>
              </div>
              {/* <!-- mobile secondary menu--> */}
              <div className="nav__secondary js-nav-secondary">
                <div className="nav__group">
                  <a className="nav__link" href="#" title="Contacts">
                    <div className="nav__preview"><i className="la la-user-lock "></i></div>
                    <div className="nav__title">Contacts</div>
                  </a>
                  <a className="nav__link" href="#" title="Messages">
                    <div className="nav__preview"><i className="la la-comments "></i>
                      <div className="nav__online online"></div>
                    </div>
                    <div className="nav__title">Messages</div>
                  </a>
                  <a className="nav__link" href="#" title="Products">
                    <div className="nav__preview"><i className="la la-cube "></i></div>
                    <div className="nav__title">Products</div>
                  </a>

                  <a className="nav__link" href="#" title="File Browser">
                    <div className="nav__preview"><i className="la la-folder-open" />
                    </div>
                    <div className="nav__title">File Browser</div>
                  </a>
                  <a className="nav__link" href="#" title="Notifications">
                    <div className="nav__preview"><i className="la la-bullseye "></i>
                      <div className="nav__online online bg-red-raw"></div>
                    </div>
                    <div className="nav__title">Notifications</div>
                  </a>

                  <a className="nav__link" href="#" title="Reports">
                    <div className="nav__preview"><i className="la la-chart-area "></i></div>
                    <div className="nav__title">Reports</div>
                  </a>

                  <a className="nav__link nav__link_user" href="#" title="User Name">
                    <div className="nav__preview"><img className="nav__pic" src="img/user-1.jpg" alt="User" />
                      <div className="nav__online online"></div>
                    </div>
                    <div className="nav__title">User Name</div>
                  </a>

                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* <UserInfo /> */}

      </div>
    </div>
  )
}

export default Sidebar