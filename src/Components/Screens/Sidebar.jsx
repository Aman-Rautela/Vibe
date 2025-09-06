import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Sidebar() {
    const navigate = useNavigate();
    const[activeId, setActiveId] = useState(1);
    const buttons = [
        {id: 1, type: "route", name: "Home", path: "/Dashboard"},
        {id: 2, type: "route", name: "Liked Songs", path: "Liked"},
        {id: 3, type: "route", name: "Saved Songs", path: "Saved"},
        {id: 4, type: "route", name: "Create Playlist", path: "Playlist"}
    ]

function handleCLick(item){
    if(item.type === "route"){
        setActiveId(item.id);
        navigate(item.path);
    }
}

    return(
        <>
            <div className="flex shadow-md bg-black w-80 p-4 items-center">
                <ul className="flex flex-col gap-3 w-70 h-full bg-gray-900 rounded-2xl">
                    {buttons.map((item) => 
                    (
                        <li key={item.id}>
                            <button
                            onClick={() => handleCLick(item)}
                            className={`w-full text-center px-3 py-2  mt-6 transition-all duration-200 ease-in-out
                                            ${activeId === item.id 
                                            ? "text-white text-xl font-bold drop-shadow-lg" 
                                            : "text-white hover:text-purple-300 hover:scale-95"}
                                    `}>
                                    <span className="cursor-pointer text-l
                                     font-medium text-white">{item.name}</span>
                            </button>
                        </li>
                   ))}
                </ul>
            </div>
        </>
    )
}