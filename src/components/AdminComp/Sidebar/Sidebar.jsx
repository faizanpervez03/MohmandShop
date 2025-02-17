import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-[#208f89] z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <IoMdClose className="text-white absolute top-4 right-4 sm:hidden block cursor-pointer text-2xl" />
      <div className=" p-4">
      <Link to="/">
             <span className="text-white font-bold text-2xl">Mohmand Shop.</span>
          </Link>
      </div>
      <ul className="mt-4">
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-[#103a38]">
          <i className="fas fa-box mr-2 inline-block text-lg"></i>{" "}
          <Link to="/admindashboard/product" className="text-base capitalize hover:text-white">
            products
          </Link>
        </li>

        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-[#103a38]">
          <i className="fas fa-user mr-2 inline-block text-lg"></i>{" "}
          <Link to="/dashboard/products" className="text-base capitalize hover:text-white">
            customers
          </Link>
        </li>

        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center  hover:bg-[#103a38]">
          <i className="fas fa-shopping-cart mr-2 inline-block text-lg"></i>{" "}
          <Link to="/admindashboard/order" className="text-base capitalize hover:text-white">
            orders
          </Link>
        </li>
        
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-[#103a38]">
          <i className="fas fa-tags mr-2 inline-block text-lg"></i>{" "}
          <Link to="/dashboard/categories" className="text-base capitalize hover:text-white">
            categories
          </Link>
        </li>
      </ul>

      <div className="text-center mt-20">
      <button className="py-2 px-4 bg-[#103a38] border-2 border-[#208f89] text-white rounded-md capitalize hover:bg-[#208f89] hover:border-2 hover:border-white" >Logout</button>
      </div>
    </div>
  );
};
export default Sidebar;