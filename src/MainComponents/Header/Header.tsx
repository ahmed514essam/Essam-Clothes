import "./Header.css";
import style from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping , faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../../product.json" ;

function Header() {

  type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
    category: string;
}
  const [data, setData] = useState<Product[]>([]);
const [ serch , setSerch] = useState("");

  useEffect(() => {
    setData(Data as Product[]);


}, []);

useEffect(() => {
  console.log(data.map((item) => {
    <p>{item.name}</p>
  }) )

});

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };
  
    // Initial load
    updateCartCount();
  
    // Listen for updates
    window.addEventListener("cartUpdated", updateCartCount);
  
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);
  

const navicate = useNavigate();

function GoToHome() {

  navicate("/");
}

function GoToCategory() {
  navicate("/category")
}


function cartGo() {
  navicate("/cart")
}

const [GetLocal, setGetLocal] = useState(localStorage.getItem("user"));



useEffect(() => {
  const handleStorageChange = () => {
    setGetLocal(localStorage.getItem("user"));
  };

  window.addEventListener("storage", handleStorageChange);


  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}, []);

const logOut = () => {
  localStorage.removeItem("user");
  setGetLocal(null); 
};


const accountt = () => {
navicate("/account")
}

const ffg = () => {
  navicate("/category")
}



  return (
    <>
    <nav>
    
<div className={style.leftSide}>

<span className={style.ssppann}>
    <h1 onClick={GoToHome}><span className={style.esH}>ESSAM</span><span className={style.stH
    }>STORE</span></h1>

    <div className={style.links}>




<div className="dropdown">
  <button onClick={ffg} className={style.dropDownLink} type="button" data-bs-toggle="dropdown" aria-expanded="false">
Gender
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Male</a></li>
    <li><a className="dropdown-item" href="#">Female </a></li>
    <li><a className="dropdown-item" href="#">Kids</a></li>
  </ul>
</div>


<div className="dropdown">
  <button className={style.dropDownLink} type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Fashion
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Clothes</a></li>
    <li><a className="dropdown-item" href="#">Shoes</a></li>
  </ul>
</div>


<button onClick={GoToCategory} className={
    style.
    Categories
}>
Categories</button>

    </div>

   

</span>


</div>






<div className={style.rightSide}>


<button className={style.asd}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

<span className={style.searchInput}>

<FontAwesomeIcon className={style.iconCart} icon={faMagnifyingGlass} />

  <input  value={serch} name="serch" onChange={(e) => setSerch(e.target.value)}  type="search" placeholder="Search For a Product" />
</span>

<span onClick={cartGo} className={style.cartSpan}>
  <span><FontAwesomeIcon className={style.iconCarty} icon={faBagShopping} /> </span>
  {/* <div className={style.numofcart}></div> */}
  <span className={style.numOfCart}>{cartCount}</span> 
</span>



{
                    GetLocal ? <span className={style.btnLog}>
                    <button className={style.btnsLog} onClick={logOut}><span>Log Out</span></button>
                  </span>
                    : <span className={style.btnLog}>
                    <button className={style.btnsLog} onClick={accountt}><span>Account</span></button>
                  </span>
                }



    
<label className={style.labelContent}>
  <input className={style.inputt} type="checkbox" />
  <div className={style.toggle}>
    <div className={style.topline}></div>
    <div className={style.middleline }></div>
    <div className={style.bottomline}></div>
  </div>
<div className={style.listInside}>
<h1><span className={style.esH}>ESSAM</span><span className={style.stH
    }>STORE</span></h1>
<ul>
<div className="dropdown">
  <button className="dropDownLink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Gender
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Male</a></li>
    <li><a className="dropdown-item" href="#">Female </a></li>
    <li><a className="dropdown-item" href="#">Kids</a></li>
  </ul>
</div>


<div className="dropdown">
  <button className="dropDownLink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Fashion
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Clothes</a></li>
    <li><a className="dropdown-item" href="#">Shoes</a></li>
    <li><a className="dropdown-item" href="#"> Electronics</a></li>
  </ul>
</div>





<button className="Categories">
Categories</button>

    
<button className={style.btnnn}>Sign In</button>

</ul>



</div>
</label>

</div>



    </nav>

    <div className="Searching">
<div className="searchSpace">
  <input type="search"  />
</div>

<div className="resultSpace">

</div>
    </div>

    </>
  );
}

export default Header;
