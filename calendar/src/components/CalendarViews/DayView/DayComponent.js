import React from "react";
import "./Day.css";

export const Day = (props) =>{
   
    return (
        <div className="day">
            <p className="day-number" id ={`${props.dayNumber}-${props.monthNumber}-${props.yearNumber}`}>{props.dayNumber}</p>
            <div className="day-content">
                
            </div>
        </div>
    );
}