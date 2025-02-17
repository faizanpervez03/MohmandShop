import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const AdminNav = ({openSidebar}) => {
    
    
    return(
     <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
      <div className="bg-[#208f89] rounded-lg w-full flex justify-between md:justify-end sm:justify-end items-center p-4">
      {/* <i className="fa fa-filter-left text-white text-2xl cursor-pointer sm:hidden block"></i> */}
      <GiHamburgerMenu className='text-white text-3xl cursor-pointer sm:hidden ' onClick={openSidebar} />
       
       <button className="py-2 px-4  bg-[#103a38] border-2 border-[#208f89] text-white rounded-md capitalize hover:bg-[#208f89] hover:border-2 hover:border-white" >Admin</button>
      </div>
     </nav>
    )
}
export default AdminNav;