import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import moment from "moment";

function DateRangePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div>
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date"
        endDate={endDate}
        endDateId="end_date"
        onDatesChange={handleDateChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        isOutsideRange={() => false}
        displayFormat="YYYY-MM-DD"
      />
    </div>
  );
}

export default DateRangePickerComponent;
