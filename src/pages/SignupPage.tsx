import React from "react";
import Signup from "../components/Signup";
import { Helmet } from "react-helmet";

const SignupPage = ()=>{



return(
    <div className="body">
         {/* {setTitle(pageDef.signup)} */}
         <Helmet>
            {/* <title>{pageDef.signup}</title> */}
        </Helmet>
        <Signup/>
    </div>
)
}

export default SignupPage