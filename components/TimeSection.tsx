import React from "react";

const TimeSection = ({ dateTime }) => {
  let splittingTime, time;
  if (dateTime) {
    splittingTime = dateTime.split("T");
    time = splittingTime[1].substring(0, 8);
  }
  return <div>{time && <div>Time: {time}</div>}</div>;
};

export default TimeSection;
