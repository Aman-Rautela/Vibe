import Header from "./Header";
import { Sidebar } from "./Sidebar";

export default function Dashboard(){
    return(
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className=" flex flex-1">
                    <Sidebar />
                    <div className="flex-1 p-4 bg-black">
                        <div className=" bg-gray-900 w-full h-full rounded-2xl">
                            <h1 className="text-4xl font-bold text-purple-600">
                            Welcome to Dashboard!
                        </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}