export const bg_img="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const Logo_Netflix="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg";
export const API_Options=  {
 
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY,
  }
};
export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780";
export const SUPPORTED_LANG=[{identifier:"English",name:"en"},{identifier:"Hindi",name:"hindi"},{identifier:"Spanish",name:"spanish"}];
export const GEMENI_APIKEY=process.env.REACT_APP_GEMENI_APIKEY_;
export const MOVIE_PROMPT="work like movie recommendation system & give top 5 movie on topic only name's in comma separated lists";