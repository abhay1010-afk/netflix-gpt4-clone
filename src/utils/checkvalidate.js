const checkvalidate=(email,password,name)=>{
   const IsemailValid=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const IspasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   const IsNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
   if(!IsemailValid)return "Email id is not valid";
   if(!IspasswordValid)return "password is not valid";
       if (IsNameValid&&name !== undefined && (!name || name.trim().length === 0)) {
    return "Name is not valid";
  }
   return null;

};
export default checkvalidate;