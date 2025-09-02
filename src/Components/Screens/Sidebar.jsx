import { useNavigate } from "react-router-dom"

export function Sidebar() {
    const navigate = useNavigate();
    const buttons = [
        {id: 1, type: "route", name: "Liked Songs", path: "/Dashboard"},
        {id: 2, type: "route", name: "Saved Songs", path: "/Dashboard"},
        {id: 3, type: "route", name: "Create Playlist", path: "/Dashboard"}
    ]

function handleCLick(item){
    if(item.type === "route"){
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
                            className="w-full text-center
                             px-3 py-2 rounded-lg hover:scale-95 transition-all duration-100 ease-in-out mt-10">
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