import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import "./Dogs.css";

const DogsCart = (props) => {
  const { id, name, breed, price, description, imageUrl } = props;
  const [isAdded, setAdded] = useState(false);
  const {addToCart, setTotal} = useContext(CartContext)

  const handleAdd = () => {
    setAdded(true);
    const newItems = {
      name: name,
      price: price, 
      imageUrl: imageUrl
    }
    addToCart((item)=>[...item, newItems])
    setTotal((total)=>total+=Number(price))
  };

  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={name} />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">${price}</div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled">
            ADDED
          </button>
        ) : (
          <button onClick={handleAdd} className="dogs-btn">
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCart;
