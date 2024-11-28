import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside style={{backgroundColor:"#208f89"}} className="w-1/5 text-white">
        <div className="h-full flex flex-col">
          <div className="p-4 text-xl font-bold bg-[#208f89]">Admin Panel</div>
          <ul className="flex-1 space-y-2 p-4">
            <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded">Products</li>
            <li className="hover:bg-gray-700 p-2 rounded">Orders</li>
            <li className="hover:bg-gray-700 p-2 rounded">Customers</li>
            <li className="hover:bg-gray-700 p-2 rounded">Reports</li>
            <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
          </ul>
          <div className="p-4 bg-[#208f89]-900 text-center">Logout</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-700">Upload Product</h1>
        <form className="mt-6 space-y-4 bg-white p-6 rounded shadow-md">
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
          <div>
            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              id="productImage"
              className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>
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
