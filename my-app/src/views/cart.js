import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Item }  from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import empty from "../assets/LogoNegroTrasparente.png";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const navigate = useNavigate();

  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = () => {
    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name: "", phone: "", email: "" },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            navigate("/contacto/:");
            alert("Compra finalizada");
          })
          .catch((err) => console.error(err));
      });
    }
  }, [updatingProducts]);

  return (
    <Layout>
      <div>
        {items.length === 0 ? (
          <div className="Empty">
            <img src={empty} alt="Empty Cart" />
            <h1>No has agregado productos</h1>
          </div>
        ) : (
          <div>
            <div>
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="BotonBorrar">
                    <Item 
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="Item">
              {isLoading ? (
                <Loading size="50px" />
              ) : (
                <button className="boton_personalizado" onClick={handleFinalizePurchase} >
                  Finalizar Compra
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;