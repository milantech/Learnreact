import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const Sampleitem = ({ item }) => {
  const [count, setCount] = useState(0);
  const [calc, setCalculation] = useState(0);
  useEffect(() => {
    //  setTimeout(() => {
    setCalculation(() => count + 1);
    // }, 1000);
  }, [count]);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>ADD</button>
      <h3>{calc}calc</h3>
      <ul>
        {item.map((el) => (
          <ItemList key={el} sampleItem={el}></ItemList>
        ))}
      </ul>
    </>
  );
};

export default Sampleitem;
