import { useState } from "react";
import {FaHeart , FaRegHeart} from "react-icons/fa";
export default function PlayBox({title, artist, isPlaying, onToggle}){

    const[liked, setLiked] = useState(false);
    return(
        <>
            <div className="fixed bottom-0 left-0 w-full bg-black text-white 
                shadow-xl p-4 flex items-center justify-between border-t border-gray-400 z-50
            ">
                <div className="flex flex-col">
                    <h3 className="text-purple-400 font-bold">{title}</h3>
                    <h4 className="text-gray-400 text-sm">{artist}</h4>
                </div>
                <div className="flex gap-7">
                    <button
                onClick={() => setLiked(!liked)}
                className={`text-2xl transition-colors duration-200 ${
                    liked ? "text-red-500" : "text-gray-400"
                }`}
                >
                    {liked ? <FaHeart/> : <FaRegHeart/>}
                </button>
                <button
                onClick={onToggle}
                className="bg-green-600 hover:bg-green-700 
                w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                >
                    {isPlaying ? "\u23F8\uFE0E" : "▶"}
                </button>
                </div>
            </div>
        </>
    )
}