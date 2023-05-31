import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBInput,
} from "mdb-react-ui-kit";

export default function SecondNav() {
  const [currentNavItem, setSelectedNavItem] = useState("weekly");

  const handleNavItemChange = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="#F5F5F5"
      style={{ boxShadow: "none", marginTop: "10px" }}
    >
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem
          style={{marginRight : '40px'}}
            className="sec-navbar-item"
            active={currentNavItem === "project"}
            onClick={() => handleNavItemChange("project")}
          >
            <MDBNavbarLink href="#">Project Planning</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem
          style={{marginRight : '40px'}}
            className="sec-navbar-item"
            active={currentNavItem === "weekly"}
            onClick={() => handleNavItemChange("weekly")}
          >
            <MDBNavbarLink href="#">weekly Planning</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem
          style={{marginRight : '40px'}}
            className="sec-navbar-item"
            active={currentNavItem === "planning"}
            onClick={() => handleNavItemChange("planning")}
          >
            <MDBNavbarLink href="#">Planning Insights</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
        <div style={{ marginRight: "90px" }}>
          <MDBInput
            type="text"
            label="Search for projects"
            className="search-input"
          />
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
