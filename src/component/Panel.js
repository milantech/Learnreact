import React from "react";

function Panel({ title, isOpen, children, onShow }) {
  return (
    <>
      <h4>
        {title}
        {isOpen}
      </h4>
      {isOpen ? <p>{children}</p> : <button onClick={onShow}>show</button>}
    </>
  );
}

export default Panel;
