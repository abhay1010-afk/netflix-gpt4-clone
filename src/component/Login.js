import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,SetSignInForm]=useState(true);
    const togglesigninform=()=>{
        SetSignInForm(!isSignInForm);
    };
    return (
        <div ><Header/>
       <div className="absolute "> <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg" alt="netflix-bg"/></div>
       <form className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
       <h1 className="font-bold text-3xl p-2">{ isSignInForm ? "Sign-in":"Sign-Up"}</h1>
       {!isSignInForm&&( <input type="text" placeholder="Your Name"  className="p-2 my-4 w-full bg-gray-600"/>)}
        <input type="text" placeholder="Email address"  className="p-2 my-4 w-full bg-gray-600"/>
        <input type="password" placeholder="password " className="my-4 p-2 w-full bg-gray-600 "/>
        <button className="py-2 my-4 w-full bg-red-700 rounded-lg">{ isSignInForm ? "Sign-in":"Sign-Up"}</button>
        <p className="py-6 font-semibold cursor-pointer" onClick={togglesigninform}>{isSignInForm? "Are you New to Netflix?  Sign Up Now.":"Already a old User? Sign In using E-mail or Number."}</p>
       </form>
        </div>
        
    )
}
export default Login;