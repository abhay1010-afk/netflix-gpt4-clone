import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { bg_img } from "../utils/Constant";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    
    const handlesignout=()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
 
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
    }
       useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName }= user;
    // ...
    dispatch(addUser({uid: uid,email: email,displayName:displayName}));
    navigate("/browse");
  
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/")
    
  }
});
// this will unmont the onauthstatechanged
return ()=>unsubscribe();
    },[]);
    return (<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between ">
        <img src={bg_img }alt="netflix logo" className="w-44 "/>
{user &&<div className="flex items-center gap-2 p-4 w-fit  rounded-lg ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-gray-700"
  >
    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z" />
  </svg>
   <h4>{user.displayName}</h4>
  <button  onClick={handlesignout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
    Sign Out
  </button>
</div>}
</div>)
};
export default Header;