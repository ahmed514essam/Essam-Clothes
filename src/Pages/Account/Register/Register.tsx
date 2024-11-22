import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Alert from "./Alert";

interface RegisterProps {
  setChange: (arg0: boolean) => void; // Define the type for the setChange prop
}

function Register({ setChange }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const [inputStyles, setInputStyles] = useState<React.CSSProperties>({
    marginBottom: "10px",
    outline: "none",
    border: "0",
  });


const [alert , setAlert] = useState<boolean>(false);

  const confirmClick = () => {
    const users = JSON.parse(localStorage.getItem("dot") || "[]");

    // Check if the entered email and password match any stored user
    const userExists = users.some(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === pass
    );

    if (userExists) {
      navigate("/"); // Navigate to homepage
    } else {
      console.log("Invalid email or password");
      setAlert(true);
      setInputStyles({ ...inputStyles, border: "2px solid red" });

    }
  };

  const changeAcc = () => {
    setChange(false);
  };

  return (
    <>
      {alert && <Alert setAlert={setAlert} />}

    <body className={styles.bodyy}>
      <div className={styles.form}>
        <h1>Log In</h1>
        <div className={styles.email}>
          <label>Email</label>
          <input
          style={inputStyles}
            className="emy"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.pass}>
          <label>Password</label>
          <input
         
            className="pass"
            name="pass"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className={styles.btnns}>
          <button onClick={confirmClick}>Log In</button>
          <Link className={styles.linkk} to="">
            Forget Password
          </Link>
          <p className={styles.poi} onClick={changeAcc}>
            Join Us
          </p>
        </div>
      </div>



    </body>
    </>
  );
}

export default Register;
