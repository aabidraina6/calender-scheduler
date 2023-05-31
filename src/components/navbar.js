import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "./components.css";

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const [educator, setEducator] = useState("Arthshala");
  const [currentNavItem, setCurrentNavItem] = useState("planning");
  const educatorNames = ["Arthshala", "Educator 2", "Educator 3"];

  const handleNavItemChange = (item) => {
    setCurrentNavItem(item);
  };

  return (
    <MDBNavbar
      className=""
      expand="lg"
      light
      bgColor="white"
      style={{ color: "black" }}
    >
      <MDBContainer fluid>
        <MDBNavbarNav left>
          <MDBNavbarBrand href="#">
            <MDBDropdown>
              <MDBDropdownToggle
                tag="div"
                className="nav-link"
                role="button"
                style={{ color: "black" }}
              >
                Educator
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem
                  onClick={() => {
                    setEducator(educatorNames[0]);
                  }}
                  link
                >
                  Arthshala
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => {
                    setEducator(educatorNames[1]);
                  }}
                  link
                >
                  Educator 2
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => {
                    setEducator(educatorNames[2]);
                  }}
                  link
                >
                  Educator 3
                </MDBDropdownItem>
              </MDBDropdownMenu>
              <p style={{ fontWeight: "100", fontSize: "15px" }}>{educator}</p>
            </MDBDropdown>
          </MDBNavbarBrand>
          <MDBNavbarNav
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MDBNavbarItem
              className="navbar-item"
              active={currentNavItem === "planning"}
              onClick={() => handleNavItemChange("planning")}
              style={{ marginRight: "20px" }}
              onSelect={() => {
                console.log("here is");
              }}
            >
              <MDBNavbarLink>
                <MDBIcon fas icon="th-large" /> Planning
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarLink></MDBNavbarLink>
            <MDBNavbarItem
              className="navbar-item"
              style={{ marginRight: "20px" }}
              active={currentNavItem === "documentation"}
              onClick={() => handleNavItemChange("documentation")}
            >
              <MDBNavbarLink>
                <MDBIcon far icon="edit" /> Documentation
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem
              className="navbar-item"
              style={{ marginRight: "20px" }}
              active={currentNavItem === "housekeeping"}
              onClick={() => handleNavItemChange("housekeeping")}
            >
              <MDBNavbarLink>
                <MDBIcon far icon="file-alt" /> Housekeeping
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarLink></MDBNavbarLink>
          </MDBNavbarNav>
        </MDBNavbarNav>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBIcon
            className="icon"
            onClick={() => {
              console.log("seraech presssed");
            }}
            size="2x"
            fas
            icon="search"
            style={{ marginRight: "20px" }}
          />
          <MDBIcon
            className="icon"
            size="2x"
            far
            icon="bell"
            style={{ marginRight: "20px" }}
          />
          <MDBDropdown style={{ marginRight: "15px" }}>
            <MDBDropdownToggle tag="a" className="nav-link" role="button">
              <img
                className="img-fluid rounded-circle"
                src="https://i.pinimg.com/474x/d0/6c/98/d06c98438ef148f378958b16a23550b5.jpg"
                alt="avatar"
                style={{ width: "100px" }}
              />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem onClick={() => {}} link>
                Profile
              </MDBDropdownItem>
              <MDBDropdownItem onClick={() => {}} link>
                Courses
              </MDBDropdownItem>
              <MDBDropdownItem onClick={() => {}} link>
                Logout
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
      </MDBContainer>
    </MDBNavbar>
  );
}
