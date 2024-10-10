import { useState } from "react";

const NumberCount = () => {
  const [num, setNumCount] = useState(0);

  function handleClick() {
    setNumCount(num + 1);
  }
  return (
    <>
      <button onClick={() => handleClick()}>{num}</button>
      <form
        onSubmit={(e) => {
          alert(e, "E..");
          console.log(e, "E..");
          e.preventDefault();
          alert(e.target.value + "Submitted!");
        }}
      >
        <input />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default NumberCount;
