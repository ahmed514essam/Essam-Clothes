import { Link } from "react-router-dom";
import style from "./Footer.module.css"
function Footer () {



    return (

<header>

<div className={style.links}>

<Link className={style.loi} to={"/"}>Home</Link>
<Link className={style.loi} to={"/category"}>Category</Link>
<Link className={style.loi} to={"/account"}>Account</Link>
<Link className={style.loi} to={""}>Services</Link>



</div>


<p className={style.ppRights}>©2024 ESSAM-store. All right reserved  </p>

</header>


    )


}
export default Footer ;