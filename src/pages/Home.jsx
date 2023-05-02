import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

import { AppContext } from "../context/appContext";

const Home = () => {
  const { setCloseSide, closeSide } = useContext(AppContext);
  return (
    <div className="home">
      <div className="container relative">
        {/* desktop sidebar */}
        <div className="flex-1 hidden lg:block">
          <Sidebar />
        </div>

        {/* mobile sidebar */}
        {closeSide == false && (
          <div className="flex-1 absolute lg:hidden top-12 left-0 bg-zinc-900 z-[999] w-full h-[100vh]">
            <Sidebar />
          </div>
        )}

        <Chat />
      </div>
    </div>
  );
};

export default Home;
