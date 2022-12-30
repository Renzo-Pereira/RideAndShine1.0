import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";
import { useGetItemImg } from "../hooks/useGetItemImg";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;
    const img = useGetItemImg(item.img);
  
    function handleCount(type) {
      if (type === "plus" && count < maxQuantity) setCount(count + 1);
      if (type === "minus" && count > 1) setCount(count - 1);
    }
  
    function handleAdd() {
      if (currentStock < count) alert("No hay suficiente stock de este producto");
      else {
        setCurrentStock(currentStock - count);
        addItem(item, count);
      }
    }
  
    function handleCheckout() {
      navigate("/cart");
    }

    return (
    <div className="DetallesPadre">
        <div className="Detalles">
            <div><h1>{item.name}</h1></div>
            <img src={img} alt={item.name} />
            <p>{item.description}</p>
            <h3>{"$"+item.price}</h3>
            <p className="text-sm">Stock: {currentStock}</p>

            <div>
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div>
            <button className="boton_personalizado"  onClick={handleAdd} disabled={currentStock === 0} >
              Agregar al carrito
            </button>
            <button className="boton_personalizado" onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        </div>
        </div>

    </div>
    );
};

export default ItemDetail; 


