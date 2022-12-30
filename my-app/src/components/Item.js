import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";

export const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(product.img);

  const description = product.description.slice(0, 30);
  const title = product.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  if (!img) {
    return <Loading />;
  }

  return (
    <div className="ItemCarrito" onClick={handleNavigate}>
      <div className="Item">
        <img
          src={img} alt="Product"
        />
        <span>
          {product.name.length > 20 ? `${title} ...` : product.name}
        </span>
        <hr />
        <p>
          {product.description.length > 30
            ? `${description} ...`
            : product.description}
        </p>
      </div>
      <div>
        <hr/>
        <div className="PrecioStock">
          <span className="font-bold">${product.price}</span>
          <span className="text-xs">
            {quantityAdded ? "Agregados" : "En Stock"}:{" "}
            {quantityAdded || product.stock}
          </span>
        </div>
      </div>
    </div>
  );
};