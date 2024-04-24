import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", 
          center: "title",
          end:""
        }}
        height={"90vh"}
      />
    </div>
  );
}

export default Calendar;