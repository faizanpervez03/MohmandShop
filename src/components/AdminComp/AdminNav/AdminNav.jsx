// import React from 'react'

// const AdminNav = () => {
    
    
//     return(
//      <nav className="fixed left-0 sm:left-60 top-2 right-0 mx-0">
//       <div className="bg-[#186d6d] w-full flex justify-between sm:justify-end items-center p-8">
//       <i className="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden block" ></i>
        
//       </div>
//      </nav>
//     )
// }
// export default AdminNav;




const AdminNav = ({openSidebar}) => {
    
    
    return(
     <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
      <div className="bg-[#208f89] rounded-lg w-full flex justify-between sm:justify-end items-center p-4">
      <i className="fa fa-filter-left text-white text-2xl cursor-pointer sm:hidden block"></i>
       <button className="py-2 px-4  bg-[#103a38] border-2 border-[#208f89] text-white rounded-md capitalize hover:bg-[#208f89] hover:border-2 hover:border-white" >Search</button>
       <button className="py-2 px-4  bg-[#103a38] border-2 border-[#208f89] text-white rounded-md capitalize hover:bg-[#208f89] hover:border-2 hover:border-white" >Admin</button>
      </div>
     </nav>
    )
}
export default AdminNav;