import { useState } from "react";

const MyForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  const [count, setCount] = useState(0);

  function sendMessage(msg) {
    alert(msg);
  }
  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  return (
    <>
      {count}

      <button
        onClick={() => {
          setCount((count) => count + 5);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        1
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          sendMessage(message);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default MyForm;
