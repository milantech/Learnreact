const ListItems = ({ name, id, check, list }) => {
  const listtoshow = list.map((el) => (
    <li key={name}>
      {el.fname}|{el.city}
      {id} | {name} | {check ? "tickxx" : "untickxx"}
    </li>
  ));
  return <ul>{listtoshow}</ul>;
};

export default ListItems;
