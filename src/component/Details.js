import { useState } from "react";

function Details(props) {
  const [data, setinputData] = useState(null);
  const [printdata, setPrintData] = useState(false);
  function getuserData(val) {
    setinputData(val.target.value);
    setPrintData(false);
  }

  return (
    <div>
      {printdata ? { data } : null}

      <p>User name: </p>
      <p>CHK{props.email}</p>

      <input type="text" onChange={getuserData} />
      <button onClick={() => setPrintData(true)}>Print data</button>
    </div>
  );
}

export default Details;
