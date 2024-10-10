import style from "./Item.module.css";

function ItemList({ sampleItem }) {
  return (
    <li key={sampleItem} className={`${style["list-item"]}`}>
      {sampleItem}
    </li>
  );
}

export default ItemList;
