const ErrorMessage = ({ item }) => {
  //  const checktodo = ["er", "asdf", "ew"];
  return <div>{item.length === 0 ? <h3>No record </h3> : null}</div>;
};

export default ErrorMessage;
