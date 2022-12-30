import ItemDetail from "./ItemDetail";
import { Loading } from "./Loading";
import { useGetItem } from "../hooks/useGetItem";

const ItemDetailContainer = () => {
  const item = useGetItem();

  if (!item) {
    return <Loading />;
  }

return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

