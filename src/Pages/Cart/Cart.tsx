import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import style from "./Cart.module.css";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    };

    // Initial load
    updateCart();

    // Listen to cart updates
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCartToLocalStorage(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCartToLocalStorage(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    saveCartToLocalStorage(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleBuyAll = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Thank you for your purchase of $${calculateTotalPrice()}!`);
    localStorage.removeItem("cart");
    setCart([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div>
      <h1 className={style.head}>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className={style.prodOne}>
            {cart.map((item) => (
              <div className={style.oneP} key={item.id}>
                <img
                  className={style.imgPro}
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={140}
                />
                <div>
                  <h3 className={style.hj}>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className={style.quantityControls}>
                    <button className={style.increase} onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className={style.amo}> {item.quantity}</span>
                    <button className={style.disinrease} onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className={style.removeFrom}
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <div className={style.kl}>
          <h2 className={style.totalPrice}>
            Total Price: ${calculateTotalPrice()}
          </h2>
          <button className={style.buyAllButton} onClick={handleBuyAll}>
            Buy All
          </button>
          </div>
        
        </>
      )}
    </div>
  );
};

export default Cart;
