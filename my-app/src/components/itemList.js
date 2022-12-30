import { Item } from "./Item";

const ItemList = ({ products }) => {
return (
    <ul className="Inicio">
    {products.map((product) => (
      <Item product={product} key={product.id}/>
    ))}
  </ul>
);
};

export default ItemList;

