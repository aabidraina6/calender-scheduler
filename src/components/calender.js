import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import InputModal from "./modal";

function Calendar() {
  const handleButtonClick = () => {
    console.log("here is the button");
    setShowModal(true)
  };

  const [showModal , setShowModal] = useState(false)

  const dayCellClassNames = function (arg) {
    if (arg.date.getDate() === new Date().getDate()) {
      return "current-date";
    }
    return "not-current-date";
  };

  const dayHeaderContent = function (arg) {
    if (arg.date.getDate() === new Date().getDate()) {
      return <div class="current-date"> {arg.text} </div>;
    }
    return arg.text;
  };

  const dayHeaderClassNames = function (arg) {
    if (arg.date.getDate() === new Date().getDate()) {
      return "current-date-header";
    }
    return "";
  };

  return (
    <div style={{ margin: "50px" }}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dayCellClassNames={dayCellClassNames}
        dayHeaderContent={dayHeaderContent}
        dayHeaderClassNames={dayHeaderClassNames}
        initialView={"timeGridWeek"}
        headerToolbar={{
          start: "title today", // will normally be on the left. if RTL, will be on the right
          center: "prev next",
          end: "myCustomButton", // will normally be on the right. if RTL, will be on the left
        }}
        titleFormat={{
          year: "2-digit",
          month: "short",
          day: "2-digit",
        }}
        titleRangeSeparator="-"
        height={"90vh"}
        customButtons={{
          myCustomButton: {
            text: "Add Period",
            click: handleButtonClick,
          },
        }}
        views={{
          timeGrid: {
            allDaySlot  : false

          },
        }}
      />
      <InputModal
      show = {showModal} setshow = {setShowModal}
      />
    </div>
  );
}

export default Calendar;
