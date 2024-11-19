import styles from "./category.module.css";
import "./category.css";
import Data from "../../product.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
    interface Product {
        id: number;
        name: string;
        price: number;
        image?: string;
        category: string;
    }

    const [data, setData] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>("all");

    useEffect(() => {
        setData(Data as Product[]);
    }, []);

    const filteredData = data.filter((item) =>
        category === "all" ? true : item.category === category
    );

    const handleCategoryClick = (selectedCategory: string, className: string) => {
        setCategory(selectedCategory);
        const buttons = document.querySelectorAll(".common");
        buttons.forEach((btn) => btn.classList.remove("active"));
        document.querySelector(`.${className}`)?.classList.add("active");
    };

    return (
        <section className={styles.contentProductSection}>
            <div className="btnsProduct">
                <button className="common all active" onClick={() => handleCategoryClick("all", "all")}>ALL</button>
                <button className="common men" onClick={() => handleCategoryClick("man", "men")}>Men</button>
                <button className="common women" onClick={() => handleCategoryClick("girl", "women")}>Women</button>
                <button className="common shoes" onClick={() => handleCategoryClick("shoes", "shoes")}>Shoes</button>
            </div>

            <div className={styles.contentProd}>
                {filteredData.map((item) => (
                    <Link to={`/AboutProduct/${item.id}`} key={item.id}>
                        <div className={styles.oneCart}>
                            <img
                                src={item.image}
                                alt={item.name}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        "/ImagesProduct/placeholder.jpg";
                                }}
                            />
                            <h2>{item.name}</h2>
                            <p>
                                Price: <span className={styles.spanPrice}>{item.price}</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Category;
