const VideoTitle=({title,overview})=>{
    return (
        <div className=" w-screen aspect-video px-4  pt-[20%] absolute text-white bg-gradient-to-r from-black">
         <h1 className=" text-2xl font-bold p-4">{title}</h1>
         <p className="hidden  text-lg p-4 w-1/2">{overview}</p>
         <div >  <button className="text-black play bg-white p-4 px-12 md:px-6 rounded-lg text-lg mx-4 font-bold" >▶ Play</button>
         <button className="text-black play bg-slate-400 p-4 rounded-lg px-12 text-lg font-semibold none md:inline-block">More Info!</button></div>
        </div>
    )
};
export default VideoTitle;