const VideoTitle=({title,overview})=>{
    return (
        <div className="py-36 p-8 ">
         <h1 className="text-5xl font-bold p-4">{title}</h1>
         <p className="text-lg p-4 w-1/2">{overview}</p>
         <div >  <button className="text-black play bg-slate-400 p-4 px-12 rounded-lg text-lg mx-4 font-semibold" >▶ Play</button>
         <button className="text-black play bg-slate-400 p-4 rounded-lg px-12 text-lg font-semibold ">More Info!</button></div>
        </div>
    )
};
export default VideoTitle;