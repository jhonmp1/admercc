import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, delivery, ubicacion, nodelivery }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        delivery: delivery,
        nodelivery: nodelivery,
        ubicacion: ubicacion,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>S/.</small>
          <strong>{price}</strong>
        </p>
        <strong>{ubicacion}</strong>
        <br></br>
        
        <p>Envio:</p><p className="happy">{delivery} <p className="angry">{nodelivery}</p></p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        
      </div>

      <img width="100" height="100" src={image} alt="" />

      <button onClick={addToBasket}>Me interesa</button>
      <button className="colorboton" onClick={addToBasket}>Ver detalles del producto</button>

    </div>
  );
}

export default Product;
