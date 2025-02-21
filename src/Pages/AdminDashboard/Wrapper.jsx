import Sidebar from "../../components/AdminComp/Sidebar/Sidebar";
import AdminNav from "../../components/AdminComp/AdminNav/AdminNav";
import { useState } from "react";

const Wrapper = ({ children }) => {

    const [side , setSide] = useState('-left-64')
   
    const openSidebar = () => {
      setSide('left-0')
    }

    const closeSidebar = () => {
      setSide('-left-64')
    }

  return (
    <>
      <Sidebar side={side} closeSidebar={closeSidebar} />
      <AdminNav openSidebar={openSidebar} />

      <section className="ml-0 p-12 sm:ml-64 sm:pl-72  bg-[#103a38] text-white min-h-screen pt-28 ">
        {children}

    


      </section>

    </>
  );
};

export default Wrapper;
