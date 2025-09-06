import { useState } from "react";

export default function Playlist(){

    const[folders, setFolders] = useState([]);


    function onCreate(){
        const newFolder = {
            id: Date.now(),
            name: `New Playlist ${folders.length + 1}`,
            songs: []
        }

        setFolders([...folders, newFolder]);
        console.log("Created", newFolder);
    }

    function onDelete(id){
        setFolders(folders.filter((folder) => folder.id !== id));
        console.log("Playlist Deleted with id no =", id);
    }

    return(
        <>
           <div 
           className="flex flex-wrap gap-6">
             <button
            onClick={onCreate}
            className="group cursor-pointer w-56 h-60 bg-black 
            rounded-2xl flex flex-col items-center justify-center
            hover:scale-95 transition ease-in-out"
            >
                <span
                className=" text-white text-7xl group-hover:scale-110 transition ease-in-out ">
                    +
                </span>
                <span 
                className="opacity-0 group-hover:opacity-100 text-white text-l mt-5
                transition-opacity duration-500 ease-in-out">
                    New!
                </span>
            </button>

            {folders.map((folder) =>(
                <div
                key = {folder.id}
                className="relative w-56 h-60 bg-gray-800 rounded-2xl flex flex-col 
                        items-center justify-center text-white"
                >
                    <span
                    className="text-xl font-bold">
                        {folder.name}
                    </span>
                    <span
                    className="text-sm opacity-70">
                        0 Songs
                    </span>
                    <button
                    onClick={() => {onDelete(folder.id)}}
                    className="group absolute top-2 right-2 text-red-400 hover:text-red-900 text-lg
                    "
                    >
                        <span className="block group-hover:hidden transition-opacity duration-300">
                            ✕
                        </span>
                    </button>
                </div>
            ))}
           </div>
        </>
    )
}