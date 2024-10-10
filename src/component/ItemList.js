import style from "./Item.module.css";

function ItemList({ sampleItem }) {
  return <li className={`${style["list-item"]}`}>{sampleItem}</li>;
}

export default ItemList;
