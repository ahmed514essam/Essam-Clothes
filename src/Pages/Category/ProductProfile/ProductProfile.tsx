import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductProfile.module.css";
import Data from "../../../product.json";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  quantity?: number;
};

const ProductProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [filterItem, setFilterItem] = useState<Product | null>(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (id) {
      const product = Data.find((item) => item.id.toString() === id);
      setFilterItem(product || null);
    }
  }, [id]);

  // Check if product is already in the cart
  useEffect(() => {
    if (filterItem) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const exists = cart.some((item: Product) => item.id === filterItem.id);
      setIsInCart(exists);
    }
  }, [filterItem]);

  const addToCart = () => {
    if (!filterItem) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item: Product) => item.id === filterItem.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...filterItem, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(true); // Update state
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeFromCart = () => {
    if (!filterItem) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((item: Product) => item.id !== filterItem.id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsInCart(false); // Update state
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!filterItem) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.imgeProduct}>
        <img
          src={filterItem.image || "/ImagesProduct/placeholder.jpg"}
          alt={filterItem.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/ImagesProduct/placeholder.jpg";
          }}
        />
      </div>
      <div className={styles.ProductDetails}>
        <h1>{filterItem.name}</h1>
        <p className={styles.prices}>
          Price: <span className={styles.redPrice}>${filterItem.price}</span>
        </p>
        <p className={styles.asd}>Category: {filterItem.category}</p>

        {isInCart ? (
          <button onClick={removeFromCart} className={styles.ptnAddi}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={addToCart} className={styles.ptnAdd}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductProfile;
