import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import UserInfo from './UserInfo'
//import react pro sidebar components
import { Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";

//import icons from react icons
import { FiLogOut } from "react-icons/fi";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import "./sidebar.css";

const commonStyles = {
  m: 1,
  borderColor: "#08B58B",
  width: "auto",
  height: "2rem",
};

function Sidebar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/logout")
      .then((response) => {
        console.log("logout", response.data);
        navigate("/");
        setUser(null);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  return (
    <div>
      <div className="sidebar js-sidebar extended">
        <div className="sidebar__nav">
          {/* <!-- nav--> */}
          <nav className="nav js-nav ">
            <a className="nav__link nav__link_head" href="/">
              <div className="nav__preview">
                <img className="nav__pic" src="img/logo.svg" alt="Logo" />
              </div>
              <div className="nav__title">
                <img className="nav__pic" src="img/betaCRM.svg" alt="betaCRM" />
              </div>
            </a>
            <div className="nav__list">
              {/* <!-- mobile primary menu--> */}
              <div className="nav__primary js-nav-primary">
                <div className="nav__group">
                  <Link to="/home">
                    <a className="nav__link active" href="#" title="Home">
                      <div className="nav__preview">
                        <SentimentSatisfiedAltIcon />
                      </div>
                      <div className="nav__title">Home</div>
                    </a>
                  </Link>

                  {user && (
                    <Link to="/host">
                      <a className="nav__link" href="#" title="Host Page">
                        <div className="nav__preview">
                          <CoPresentIcon />
                        </div>
                        <div className="nav__title">Host Page</div>
                      </a>
                    </Link>
                  )}

                  {user && (
                    <Link to="/bookings">
                      <a className="nav__link" href="#" title="Attender Page">
                        <div className="nav__preview">
                          <CollectionsBookmarkIcon />
                        </div>
                        <div className="nav__title">Attender Page</div>
                      </a>
                    </Link>
                  )}
                  {user && (
                    <Link to="/createEvent">
                      <a
                        className="nav__link"
                        href="#"
                        title="Create My New Event"
                      >
                        <div className="nav__preview">
                          <AddCircleOutlineIcon />
                        </div>
                        <div className="nav__title">Create My New Event</div>
                      </a>
                    </Link>
                  )}
                  {user && (
                    <Link to="/newevent">
                      <a
                        className="nav__link"
                        href="#"
                        title="Create My New Event"
                      >
                        <div className="nav__preview">
                          <AddCircleOutlineIcon />
                        </div>
                        <div className="nav__title">Create My New Event</div>
                      </a>
                    </Link>
                  )}
                  {!user && (
                    <Link to="/signIn">
                      <a className="nav__link" href="#" title="Login First">
                        <div className="nav__preview">
                          <LockOpenIcon />
                        </div>
                        <div className="nav__title">Login First</div>
                      </a>
                    </Link>
                  )}
                  {!user && (
                    <Link to="/signUp">
                      <a className="nav__link" href="#" title="Sign Up">
                        <div className="nav__preview">
                          <AppRegistrationIcon />
                        </div>
                        <div className="nav__title">Sign Up</div>
                      </a>
                    </Link>
                  )}
                  <Box sx={{ ...commonStyles, borderBottom: 1 }} />
                  {user && (
                    <div className="logout" onClick={handleLogout}>
                      <SidebarFooter>
                        <Menu iconShape="square">
                          <MenuItem icon={<FiLogOut />}></MenuItem>
                        </Menu>
                      </SidebarFooter>
                    </div>
                  )}

                  {/* <a
                    className="nav__link nav__link_menu js-nav-link-menu"
                    href="#"
                  >
                    <div className="nav__preview">
                      <i className="la la-bars "></i>
                    </div>
                  </a> */}
                </div>
              </div>
              {/* <!-- mobile secondary menu--> */}
              {/* <div className="nav__secondary js-nav-secondary">
                <div className="nav__group">
                  <a className="nav__link" href="#" title="Messages">
                    <div className="nav__preview">
                      <i className="la la-comments "></i>
                      <div className="nav__online online"></div>
                    </div>
                    <div className="nav__title">Messages</div>
                  </a>
                  <a className="nav__link" href="#" title="Products">
                    <div className="nav__preview">
                      <i className="la la-cube "></i>
                    </div>
                    <div className="nav__title">Products</div>
                  </a>

                  <a className="nav__link" href="#" title="File Browser">
                    <div className="nav__preview">
                      <i className="la la-folder-open" />
                    </div>
                    <div className="nav__title">File Browser</div>
                  </a>
                  <a className="nav__link" href="#" title="Notifications">
                    <div className="nav__preview">
                      <i className="la la-bullseye "></i>
                      <div className="nav__online online bg-red-raw"></div>
                    </div>
                    <div className="nav__title">Notifications</div>
                  </a>

                  <a className="nav__link" href="#" title="Reports">
                    <div className="nav__preview">
                      <i className="la la-chart-area "></i>
                    </div>
                    <div className="nav__title">Reports</div>
                  </a> */}
              {/* <a className="nav__link" href="#" title="Projects">
                    <div className="nav__preview">
                      <i className="la la-toolbox "></i>
                    </div>
                    <div className="nav__title">Projects</div>
                  </a> */}

              {/* <a className="nav__link" href="#" title="Kanban">
                    <div className="nav__preview">
                      <i className="la la-images "></i>
                    </div>
                    <div className="nav__title">Kanban</div>
                  </a> */}

              {/* <a
                    className="nav__link nav__link_user"
                    href="#"
                    title="User Name"
                  >
                    <div className="nav__preview">
                      <img
                        className="nav__pic"
                        src="img/user-1.jpg"
                        alt="User"
                      />
                      <div className="nav__online online"></div>
                    </div>
                    <div className="nav__title">User Name</div>
                  </a> */}
              {/* </div>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    // </div >
  );
}

export default Sidebar;
