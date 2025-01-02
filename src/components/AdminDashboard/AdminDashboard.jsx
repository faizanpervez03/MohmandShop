import React from 'react';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-5 h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        style={{ backgroundColor: "#208f89" }}
        className="md:col-span-1 p-4  text-white"
      >
        <div className="h-full flex flex-col">
          <div className="text-2xl font-bold p-3">Mohmand Shop</div>
          <hr />
          <div className="p-3 bg-[#208f89] text-center">
            <h2 className="mt-2 text-xl text-start font-medium">Admin Panel</h2>
          </div>
          <hr />
          {/* Navigation Links */}
          <ul className="flex-1 space-y-2 p-4">
            
            <li className="hover:bg-gray-300 hover:text-black p-2 rounded">
              <Link>Products</Link>
            </li>
            <li className="hover:bg-gray-300 hover:text-black p-2 rounded">
            <Link>Orders</Link>
            </li>
            <li className="hover:bg-gray-300 hover:text-black p-2 rounded">
            <Link>Customers</Link>
            </li>
          </ul>
          <hr />
          {/* Logout Button */}
          <div className="w-auto bg-[#208f89] p-4">
            <button
              style={{ boxShadow: "10px 10px 30px 1px black" }}
              className="bg-[#208f90] font-bold w-[100%] p-3 text-center"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:col-span-4  p-8 bg-white">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Upload Product</h1>
        <form className="space-y-4 p-6 rounded shadow-md">
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product name"
            />
          </div>
          {/* Product Price */}
          <div>
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              id="productPrice"
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product price"
            />
          </div>
          {/* Product Stock */}
          <div>
            <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">
              Product Stock
            </label>
            <input
              type="number"
              id="productStock"
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product stock"
            />
          </div>
          {/* Main Image */}
          <div>
            <label htmlFor="mainImage" className="block text-sm font-medium text-gray-700">
              Main Image
            </label>
            <input
              type="file"
              id="mainImage"
              className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>
          {/* Thumbnail Images */}
          <div>
            <label htmlFor="thumbnails" className="block text-sm font-medium text-gray-700">
              Thumbnail Images (3)
            </label>
            <input
              type="file"
              id="thumbnails"
              multiple
              className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#208f89] text-white font-semibold rounded hover:bg-blue-700"
          >
            Upload Product
          </button>
        </form>
      </main>
    </div>
  );
};

export default AdminDashboard;