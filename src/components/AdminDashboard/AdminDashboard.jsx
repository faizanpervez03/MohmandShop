// import React from 'react';
// import { Link } from 'react-router-dom';


// const AdminDashboard = () => {
//   return (
//     <div className="grid grid-cols-1  md:grid-cols-5 h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         style={{ backgroundColor: "#208f89" }}
//         className="md:col-span-1 p-4  text-white"
//       >
//         <div className="h-full flex flex-col">
//           <div className="text-2xl font-bold p-3">Mohmand Shop</div>
//           <hr />
//           <div className="p-3 bg-[#208f89] text-center">
//             <h2 className="mt-2 text-xl text-start font-medium">Admin Panel</h2>
//           </div>
//           <hr />
//           {/* Navigation Links */}
//           <ul className="flex-1 space-y-2 p-4">
            
//             <li className="hover:bg-gray-300 hover:text-black p-2 rounded">
//               <Link>Products</Link>
//             </li>
//             <li className="hover:bg-gray-300 hover:text-black p-2 rounded">
//             <Link>Orders</Link>
//             </li>
//             <li className="hover:bg-gray-300 hover:text-black p-2 rounded">
//             <Link>Customers</Link>
//             </li>
//           </ul>
//           <hr />
//           {/* Logout Button */}
//           <div className="w-auto bg-[#208f89] p-4">
//             <button
//               style={{ boxShadow: "10px 10px 30px 1px black" }}
//               className="bg-[#208f90] font-bold w-[100%] p-3 text-center"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="md:col-span-4  p-8 bg-white">
//         <h1 className="text-2xl font-bold text-gray-700 mb-6">Upload Product</h1>
//         <form className="space-y-4 p-6 rounded shadow-md">
//           {/* Product Name */}
//           <div>
//             <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
//               Product Name
//             </label>
//             <input
//               type="text"
//               id="productName"
//               className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter product name"
//             />
//           </div>
//           {/* Product Price */}
//           <div>
//             <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
//               Product Price
//             </label>
//             <input
//               type="number"
//               id="productPrice"
//               className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter product price"
//             />
//           </div>
//           {/* Product Stock */}
//           <div>
//             <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">
//               Product Stock
//             </label>
//             <input
//               type="number"
//               id="productStock"
//               className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter product stock"
//             />
//           </div>
//           {/* Main Image */}
//           <div>
//             <label htmlFor="mainImage" className="block text-sm font-medium text-gray-700">
//               Main Image
//             </label>
//             <input
//               type="file"
//               id="mainImage"
//               className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//             />
//           </div>
//           {/* Thumbnail Images */}
//           <div>
//             <label htmlFor="thumbnails" className="block text-sm font-medium text-gray-700">
//               Thumbnail Images (3)
//             </label>
//             <input
//               type="file"
//               id="thumbnails"
//               multiple
//               className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//             />
//           </div>
//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-[#208f89] text-white font-semibold rounded hover:bg-blue-700"
//           >
//             Upload Product
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const AdminDashboard = () => {
  return (
    <div className="container-xxl position-relative flex p-0">
      {/* Sidebar */}
      <aside className="w-64 bg-light h-screen px-4 pb-3 ">
        <nav className="navbar bg-light navbar-light flex flex-col">
          <Link to="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-blue-700 text-2xl">Mohmand Shop</h3>
          </Link>
          <div className="flex items-center ms-4 mb-4">
            <div className="relative">

              <img
                className="rounded-full"
                src="../../images/shahid.JPG"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="absolute bg-success rounded-full border-2 border-white bottom-0 right-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Ahmad Khan</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="w-full">
            <Link to="index.html" className="nav-item nav-link active flex items-center">
              <i className="fa fa-tachometer-alt me-2"></i>Dashboard
            </Link>
            <div className="dropdown">
              <Link to="#" className="nav-link dropdown-toggle flex items-center">
                <i className="fa fa-shopping-bag me-2"></i>Products
              </Link>
              <div className="dropdown-menu bg-transparent border-0">
                <Link to="button.html" className="dropdown-item">
                  Buttons
                </Link>
                <Link to="typography.html" className="dropdown-item">
                  Typography
                </Link>
                <Link to="element.html" className="dropdown-item">
                  Other Elements
                </Link>
              </div>
            </div>
            <Link to="form.html" className="nav-item nav-link flex items-center">
              <i className="fa fa-user me-2"></i>Customers
            </Link>
            <Link to="table.html" className="nav-item nav-link flex items-center">
              <i className="fa fa-clipboard-list me-2"></i>Orders
            </Link>
            <Link to="chart.html" className="nav-item nav-link flex items-center">
              <i className="fa fa-chart-bar me-2"></i>Charts
            </Link>
           
          </div>
        </nav>
      </aside>

      {/* Content */}
      <main className="content flex-grow bg-gray-400">
        {/* Navbar */}
        <nav className="navbar bg-light sticky top-0 px-4 py-0">
          <Link to="index.html" className="navbar-brand d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-hashtag"></i>
            </h2>
          </Link>
          <form className="hidden md:flex ms-4">
            <input
              className="form-control border-0"
              type="search"
              placeholder="Search"
            />
          </form>
          <div className="flex ms-auto items-center">
            {/* Messages */}
            <div className="dropdown">
              <Link to="#" className="nav-link dropdown-toggle flex items-center">
                <i className="fa fa-envelope me-lg-2"></i>
                <span className="hidden lg:inline">Message</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-light">
                {/* Add messages here */}
              </div>
            </div>

            {/* Notifications */}
            <div className="dropdown">
              <Link to="#" className="nav-link dropdown-toggle flex items-center">
                <i className="fa fa-bell me-lg-2"></i>
                <span className="hidden lg:inline">Notification</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-light">
                {/* Add notifications here */}
              </div>
            </div>

            {/* Profile */}
            <div className="dropdown">
              <Link to="#" className="nav-link dropdown-toggle flex items-center">
                <img
                  className="rounded-full"
                  src="img/user.jpg"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="hidden lg:inline">John Doe</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-light">
                <Link to="#" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="#" className="dropdown-item">
                  Settings
                </Link>
                <Link to="#" className="dropdown-item">
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Sale & Revenue */}
       
      </main>
    </div>
  );
};

export default AdminDashboard;
