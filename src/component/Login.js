import { useRef, useState } from "react";
import Header from "./Header";
import checkvalidate from "../utils/checkvalidate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Logo_Netflix } from "../utils/Constant";

const Login=()=>{
    const [isSignInForm,SetSignInForm]=useState(true);
    const [errormessage,setErrorMessage]=useState(null);
   
    const dispatch=useDispatch();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const togglesigninform=()=>{
        SetSignInForm(!isSignInForm);
    };
   
  const handleClick = () => {
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const nameVal = name.current ? name.current.value: "";
  


    let message;
    if (isSignInForm) {
      message = checkvalidate(emailVal, passwordVal);
    } else {
      message = checkvalidate(emailVal, passwordVal, nameVal);
    }

    setErrorMessage(message);
    if (message) return;
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {displayName:nameVal,
   photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
   const {uid,email,displayName }=auth;
      // ...
      dispatch(addUser({uid: uid,email: email,displayName:displayName}));
 
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message);
});
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
    else{
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
  .then((userCredential) => {})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }

    // Proceed with login or registration logic
  };
    return (
        <div ><Header/>
       <div className="absolute "> <img src={Logo_Netflix}alt="netflix-bg" className="h-full w-full object-contain"/></div>
       <form onSubmit={(e)=>{e.preventDefault()}} className=" absolute w-76 ml-[36%] bg-black top-36 p-12   text-white bg-opacity-80 rounded-lg">
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