import { useNavigate } from "react-router-dom";
import Vid2 from "../assets/Vid2.mp4"

export default function SignUp(){
    const navigate = useNavigate();

    function handleSignUp(){
        navigate("/");
    }


    return(
        <>
        <div className=" min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            <h2 className="text-center font-bold text-white mt-0.5 text-xl">
        <span className="font-extrabold text-4xl text-yellow-300">VIBE</span> Welcomes You</h2>
            <div className="w-[800px] h-[500px] flex  overflow-hidden3 bg-white">
                        <div className="shadow-2xl p-4 bg-white  max-w-96 flex flex-col justify-center items-center">
         <form className="space-y-4 ">
            <input
                className="w-full border-none bg-gray-100 rounded-xl px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="text"
                placeholder="Enter your Name"
                name="name" />
            <input
                className="w-full border-none bg-gray-100 rounded-xl px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="email"
                placeholder="Enter your email"
                name="email" />
            <input
                className="w-full border-none bg-gray-100 rounded-xl px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="password"
                placeholder="Password"
                name="password" />
            <button 
                className=" w-full rounded-2xl text-white bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 px-3 py-2 hover:scale-95 hover:shadow-2xl transition-all duration-500 ease-in-out"
                type="submit"
                onClick={handleSignUp}
                >
                Sign Up
            </button>
           <div className="flex items-center my-4">
                <hr className="flex-grow border-t-2 border-gray-300"/>
                <span className="text-black px-2">OR</span>
                <hr className="flex-grow border-t-2 border-gray-300" />
           </div>
           {/* <button
           className="w-full flex justify-center items-center gap-2 bg-gray-100 rounded-2xl p-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
            className="w-5 h-5" />
            Continue with Google?
           </button> */}
            <p className="w-full text-xs flex justify-center items-center gap-2">
          Already have an account?
          <button
          type="button"
            className="text-xs text-gray-600 hover:text-purple-500 cursor-pointer"
            onClick={() => navigate("/SignIn")}
          >
            Sign In
          </button>
        </p>
        </form>
       </div>
            <div className="flex-1">
            <video
            className="w-full h-full object-cover rounded-l-2xl rounded-bl-2xl"
            src={Vid2}
            autoPlay
            loop
            muted
            />
            </div>

        </div>
      </div>  
        </>
    )
}


