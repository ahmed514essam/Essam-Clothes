import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sign.module.css";

interface RegisterProps {
  setChange: (arg0: boolean) => void; // Define the type for the setChange prop
}

function SignIn({ setChange }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passon, setPasscon] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

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

    // Validate email
    if (!validEmail.test(email)) {
      setInputStylese({ ...inputStylese, border: "2px solid red" });
      isValid = false;
    } else {
      setInputStylese({ ...inputStylese, border: "0" });
    }

    // Validate password
    if (!validPassword.test(pass)) {
      setInputStyles({ ...inputStyles, border: "2px solid red" });
      isValid = false;
    } else {
      setInputStyles({ ...inputStyles, border: "0" });
    }

    // Validate password confirmation
    if (pass !== passon) {
      setCon({ ...con, border: "2px solid red" });
      isValid = false;
    } else {
      setCon({ ...con, border: "0" });
    }

    if (isValid) {
      // Store user data
      const newUser = { name, email, password: pass, city };
      const existingUsers = JSON.parse(localStorage.getItem("dot") || "[]");
      existingUsers.push(newUser);
      localStorage.setItem("dot", JSON.stringify(existingUsers));

      navigate("/"); // Navigate to homepage
    }
  }

  const toLog = () => {
    setChange(true);
  };

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
          <input
            className="emy"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStylese}
            type="email"
            required
          />
        </div>
        <div className={styles.pass}>
          <label>Password</label>
          <input
            className="pass"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={inputStyles}
            type="password"
          />
        </div>
        <div className={styles.passCon}>
          <label>Confirm Password</label>
          <input
            name="passcon"
            value={passon}
            onChange={(e) => setPasscon(e.target.value)}
            style={con}
            type="password"
          />
        </div>
        <div className={styles.city}>
          <label>City</label>
          <input
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className={styles.btnns}>
          <button className={styles.onecli} onClick={confirmClick}>
            Confirm
          </button>
          <p className={styles.linkk} onClick={toLog}>
            I have Already Account
          </p>
        </div>
      </div>
    </body>
  );
}

export default SignIn;
