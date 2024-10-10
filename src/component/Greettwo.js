import React from "react";
const today = new Date();
function formatdate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
const Greettwo = ({ personname, sampleobj }) => {
  return (
    <div>
      <h1>
        Welcome {sampleobj.city} {formatdate(today)}
        <br />
        {personname}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greettwo;
