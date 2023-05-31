import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "./components.css";
import DateRangePickerComponent from "./dateRangePicker";

export default function InputModal(props) {
  const toggleShow = () => props.setshow(!props.show);

  return (
    <>
      <MDBModal
        show={props.show}
        setShow={props.setshow}
        tabIndex="-1"
        staticBackdrop
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Period</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="container">
                <form action="#">
                  <div className="form first">
                    <div className="details personal">
                      <div className="fields1">
                        <div className="input-field">
                          <label style={{display : 'inline-block' , textAlign : 'left'}}>Period Name</label>
                          <input
                            type="text"
                            placeholder="Period name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="details ID">
                      <div className="fields">
                        <div className="input-field">
                          <label>Start  Time</label>
                          <input
                            type="time"
                            required
                          />
                        </div>
                        <div className="input-field">
                          <label>End Time</label>
                          <input
                            type="time"
                            required
                          />
                        </div>
                        
                        
                        <div className="input-field">
                          <label>Issued Date</label>
                          <input
                            type="date"
                            placeholder="Enter your issued date"
                            required
                          />
                        </div>
                        <div className="input-field">
                          <label>Expiry Date</label>
                          <input
                            type="date"
                            placeholder="Enter expiry date"
                            required
                          />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  
                </form>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
