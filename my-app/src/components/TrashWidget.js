import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  console.log({ itemId });
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="boton_personalizado"
    >
      <p>Borrar item</p>
    </button>
  );
};