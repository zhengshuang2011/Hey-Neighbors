//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

//import routing tools for react which is definitely needed

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ user, setUser }) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);
  const navigate = useNavigate();

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleLogout = () => {
    axios
      .post("/api/users/logout")
      .then((response) => {
        console.log("logout", response.data);
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              {menuCollapse ? (
                <p>Hey</p>
              ) : (
                <p>
                  Hey <span className="neigbors"> Neigbors</span>
                </p>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <Link style={{ color: "black" }} to="/Home">
                  Home
                </Link>
              </MenuItem>
              <MenuItem active={true} icon={<FaList />}>
                <Link to="/Myevent" style={{ color: "black" }}>
                  My Events
                </Link>
              </MenuItem>
              <MenuItem active={true} icon={<FaRegHeart />}>
                <Link to="/Bookings" style={{ color: "black" }}>
                  Bookings
                </Link>
              </MenuItem>
              <MenuItem active={true} icon={<RiPencilLine />}>
                <Link to="/CreateEvent" style={{ color: "black" }}>
                  Create Event
                </Link>
              </MenuItem>
              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            {" "}
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
