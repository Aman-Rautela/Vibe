export default function Card() {
  return (
    <div className="relative group w-56 h-60 shadow-2xl bg-black 
      rounded-xl hover:scale-95 transition-transform p-4 inline-block m-4 overflow-hidden">
      
      <div className="p-4 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 transform ">
        <h3 className="text-purple-400 font-bold">My Song</h3>
        <h3 className="text-gray-400 text-sm">Artist Name</h3>
      </div>

      <button
        className="absolute bottom-4 right-4 bg-green-600 w-12 h-12 rounded-full 
        flex items-center justify-center text-white text-xl opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-green-300
        cursor-pointer"
      >
        ▶
      </button>
    </div>
  );
}
