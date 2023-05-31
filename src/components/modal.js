import { MDBModal, MDBModalBody, MDBModalHeader } from "mdb-react-ui-kit";
import React from "react";


export default function InputModal(){

    return(
        <div>
            <MDBModal show staticBackdrop>
                <MDBModalHeader>
                    this is a modal
                </MDBModalHeader>
                <MDBModalBody>
                    this is the; bo
                </MDBModalBody>
            </MDBModal>
        </div>
    );
}