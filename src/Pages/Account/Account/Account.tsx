// Pages/Account/Account/Account.tsx

import { useState } from "react";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";


const Account = () => {

    const [ change , setChange ] = useState<boolean>(false);


    return (
        <>
           



{change ? <Register  setChange={setChange}/> : <SignIn  setChange={setChange}/> }

        </>
    );
};

export default Account;
