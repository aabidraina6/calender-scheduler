import React, { useState } from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalDialog } from "mdb-react-ui-kit";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function DateRangePickerComponent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleDateChange = (ranges) => {
    setSelectedDates([ranges.selection]);
  };

  const handleInputClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <input
        type="text"
        onClick={handleInputClick}
        value={selectedDates[0].startDate.toLocaleDateString()}
        readOnly
      />

          <h5 className="modal-title">Select Date Range</h5>
          <DateRangePicker ranges={selectedDates} onChange={handleDateChange} />
    </div>
  );
}

export default DateRangePickerComponent;
  


