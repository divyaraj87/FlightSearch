import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 return (
   <div className="dateContainer"><div className="start">Depart
     <DatePicker
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     /></div>
     <div className="end">End
     <DatePicker
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     /></div>
   </div>
 );
}