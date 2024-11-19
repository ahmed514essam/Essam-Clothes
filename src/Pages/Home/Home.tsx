import styles from "./Home.module.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import imageSrc from '../../photos/offer.jpg';
function Home() {
  
   


    


    return(
        <>

<section className={styles.FirstSection}>


<div className={styles.ContentDivSection}>
    <h1>Just For You
DISC for online order 25%
</h1>
<button>Join Now <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
</div>


</section>
     
        



   <section className={styles.secondSection}>

<div className={styles.contentSecondSecotion}>

<div className={styles.textffer}>
Don’t miss out on our special offers! Enjoy discounts on must-have outfits, accessories, and footwear. Check out our buy one, get one 50% off deals and seasonal sales for unbeatable savings.
</div>



<div className={styles.imgeffer}>
    <img src={imageSrc} alt="Description" />
</div>


</div>

   </section>

        </>
    )
}
export default Home ;