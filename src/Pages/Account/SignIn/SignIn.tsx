import { Link, useNavigate } from "react-router-dom";
import styles from "./Sign.module.css";
import  { useState } from "react";
import "./sign.css"

function SignIn() {
    const [name, setName] = useState("");
    const [email, srtEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passon, setPasscon] = useState("");

    const [city, setCity] = useState("");

  const navicate = useNavigate();

  const [inputStyles, setInputStyles] = useState<React.CSSProperties>({
    marginBottom: "10px", 
    outline: "none",
    border: "0",
  });
  const [inputStylese, setInputStylese] = useState<React.CSSProperties>({
    marginBottom: "10px", 
    outline: "none",
    border: "0",
  });

  const [con, setCon] = useState<React.CSSProperties>({
    marginBottom: "10px", 
    outline: "none",
    border: "0",
  });
  

  const validEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;




  function confirmClick() {
    let isValid = true;
  
    if (!email.match(validEmail)) {
      setInputStylese({
        ...inputStylese,
        border: "2px solid red",
      });
      isValid = false;
    } else {
      setInputStylese({
        ...inputStylese,
        border: "0", 
      });
    }
  
    if (!pass.match(validPassword)) {
      setInputStyles({
        ...inputStyles,
        border: "2px solid red",
      });
      isValid = false;
    } else {
      setInputStyles({
        ...inputStyles,
        border: "0", 
      });
    }
  
if (pass === passon) {
isValid = true ;

setCon({
    ...con,
border: "0" ,
})


}else {

isValid = false ;

setCon(
    { 
        ...con,
        border: "2px solid red",
        
    }
)
}


    if (isValid) {
      navicate("/");

const array = [name , pass , city , email] ;

localStorage.setItem("user" , array.toString());



    }
  }
  



    return (
        <body className={styles.bodyy}>
            <div className={styles.form}>
                <h1>Join Us</h1>
                <div className={styles.names}>
                    <label>Full Name</label>
                    <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required
                        
                    />
                </div>
                <div className={styles.email}>
                    <label>Email</label>
                    <input className="emy" name="email" value={email} onChange={(e) => srtEmail(e.target.value)}  style={inputStylese} type="email" required />
                </div>
                <div className={styles.pass}>
                    <label>Password</label>
                    <input className="pass" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} style={inputStyles}  type="password" />
                </div>
                <div className={styles.passCon}>
                    <label>Confirm Password</label>
                    <input name="passcon" value={passon} onChange={(e) => setPasscon(e.target.value)} style={con}  type="password" />
                </div>
                <div className={styles.city}>
                    <label>City</label>
                    <input name="city" value={city} onChange={(e) => setCity(e.target.value)}  type="text" required />
                </div>
                <div className={styles.btnns}>
                    <button onClick={confirmClick}>Confirm</button>
                    <Link className={styles.linkk} to={""}>
                        I have Already Account
                    </Link>
                </div>
            </div>
        </body>
    );
}

export default SignIn;
