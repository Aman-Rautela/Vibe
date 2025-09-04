import { Outlet } from "react-router-dom";
import Card from "../Card/Card";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 bg-black p-6 overflow-y-auto">
          <div className="bg-gray-900 w-full min-h-full rounded-2xl p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
