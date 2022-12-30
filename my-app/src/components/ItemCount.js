export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
        <button
          onClick={() => handleCount("minus")}
          className="boton_personalizado"
        >
          -
        </button>
        <span
          id="counter"
          className="boton_personalizado"
        >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          className="boton_personalizado"
        >
          +
        </button>
      </div>
    );
  };