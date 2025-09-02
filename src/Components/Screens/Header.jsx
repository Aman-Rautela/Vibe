import logo from "../../assets/Vibe_Logo.png";
// import profile from "../../assets/Pic.jpg";
import { useNavigate } from "react-router-dom";
export default function Header(){

    const navigate = useNavigate();
    const list = [
        {id: 2, type: "route", name: "Logout", path: "/"}
    ]

    function handleCLick(item){
        if(item.type === "route" && item.name === "Logout"){
        navigate("/SignIn");
        }
    }

    return(
        <>
            <div className="w-full h-14 flex items-center justify-center 
        bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 
        bg-[length:200%_200%] animate-gradient">
                <h2 className="text-white font-bold text-2xl">Vibe It UP</h2>
            </div>
            {/* <hr className="border-gray-400 my-"/> */}
            <div className="flex w-full items-center justify-between bg-black px-4 py-2">
                <div className="w-24 h-16">
                    <img className="px-3 py-0" src={logo} alt="vibelogo"/>
                </div>
                <div className="flex flex-1 justify-center items-center px-4">
                    <input 
                    className="text-white bg-gray-900 border-2 border-gray-900 rounded-xl w-full h-10 px-2 py-1" 
                    type="text" 
                    placeholder="Search by artist" />
                </div>
                <div className="flex">
                    <ul className="spcae-y-2 flex items-center gap-4">
                        {list.map((item) =>
                            (
                                <li key={item.id}>
                                    <button 
                                    onClick={() => handleCLick(item)}
                                    className="w-full gap-4 flex items-center px-3 py-2">
                                        {/* {item.type === "pic" && (
                                            <img
                                            src= {item.img}
                                            alt= {item.name}
                                            className="rounded-full border w-12 h-12"
                                            />
                                        )} */}
                                            <span className="text-lg text-white">{item.name}</span>
                                    </button>
                                </li>
                         ))}
                    </ul>
                </div>
            </div>


        <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 6s ease infinite;
            background-size: 200% 200%;
          }
        `}
        </style>
        </>
    )
}