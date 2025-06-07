import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { bg_img, SUPPORTED_LANG } from "../utils/Constant";
import { toggleGptSearch } from "../utils/GptSlice";
import { changelanguage } from "../utils/consfigSlice";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const showGptSearch=useSelector(store=>store.Gpt.showGptSearch);
    
    const handlesignout=()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
 
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
    }
    const handlelanguagechange=(e)=>{
      //  console.log(e.target.value);
      dispatch(changelanguage(e.target.value));
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
    });
    const handleGptSearch=()=>{
      //Toggle gptsearch
      dispatch(toggleGptSearch());
    }

    return (<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between ">
        <img src={bg_img }alt="netflix logo" className="w-44 "/>
{user &&<div className="flex items-center gap-2 p-4 w-fit  rounded-lg ">
{showGptSearch &&  <select className="p-2 m-2 bg-gray-900 text-white rounded-lg" onChange={handlelanguagechange}>{SUPPORTED_LANG.map((lang)=> <option key={lang.identifier} value={lang.name}>{lang.identifier}</option>)}
  </select>}
     <button className="p-2 m-2 rounded-lg bg-purple-700 text-white" onClick={handleGptSearch}>{showGptSearch?"Home-page":"GPT-Search"} </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10 text-white bg-red-700 rounded-full"
  >
    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z" />
  </svg>
   <h4>{user.displayName}</h4>

  <button  onClick={handlesignout} className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-700 transition">
    Sign Out
  </button>
</div>}
</div>)
};
export default Header;