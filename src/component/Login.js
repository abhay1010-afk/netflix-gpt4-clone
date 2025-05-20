import { useRef, useState } from "react";
import Header from "./Header";
import checkvalidate from "../utils/checkvalidate";

const Login=()=>{
    const [isSignInForm,SetSignInForm]=useState(true);
    const [errormessage,setErrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const togglesigninform=()=>{
        SetSignInForm(!isSignInForm);
    };
   
  const handleClick = () => {
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const nameVal = name.current ? name.current.value : "";
;

    let message;
    if (isSignInForm) {
      message = checkvalidate(emailVal, passwordVal);
    } else {
      message = checkvalidate(emailVal, passwordVal, nameVal);
    }

    setErrorMessage(message);
    if (message) return;

    // Proceed with login or registration logic
  };
    return (
        <div ><Header/>
       <div className="absolute "> <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg" alt="netflix-bg"/></div>
       <form onSubmit={(e)=>{e.preventDefault()}} className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
       <h1 className="font-bold text-3xl p-2">{ isSignInForm ? "Sign-in":"Sign-Up"}</h1>
       {!isSignInForm&&( <input type="text" ref={name}placeholder="Your Name"  className="p-2 my-4 w-full bg-gray-600"/>)}
        <input type="text" ref={email} placeholder="Email address"  className="p-2 my-4 w-full bg-gray-600"/>
        <input type="password" ref={password} placeholder="password " className="my-4 p-2 w-full bg-gray-600 "/>
        <p className="text-red-600 font-bold text-lg">{errormessage}</p>
        <button className="py-2 my-4 w-full bg-red-700 rounded-lg" onClick={handleClick}>{ isSignInForm ? "Sign-in":"Sign-Up"}</button>
        <p className="py-6 font-semibold cursor-pointer" onClick={togglesigninform}>{isSignInForm? "Are you New to Netflix?  Sign Up Now.":"Already a old User? Sign In using E-mail or Number."}</p>
       </form>
        </div>
        
    )
}
export default Login;