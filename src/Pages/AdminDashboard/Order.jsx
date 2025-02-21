import React from 'react';
import Wrapper from './Wrapper';

const Order = () => {
  return (
    <Wrapper>
      <div className="max-w- sm:w-full mx-auto p-6 font-sans">
        <h1 className="text-3xl font-bold text-white mb-6">Order Details</h1>

        {/* Order Information */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700"><strong>Order ID:</strong> #ORDER_ID</p>
          <p className="text-gray-700"><strong>Order Date:</strong> ORDER_DATE</p>
          <p className="text-gray-700 mt-1">
            <strong>Status:</strong>{" "}
            <span className="px-3 py-1   rounded-full text-sm font-semibold bg-yellow-200 text-yellow-800 ">
              ORDER_STATUS
            </span>
          </p>
        </div>

        {/* Ordered Items Table */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Items Ordered</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-gray-700">Product</th>
                <th className="p-3 text-left text-gray-700">Quantity</th>
                <th className="p-3 text-left text-gray-700">Price</th>
                <th className="p-3 text-left text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamic rows */}
              <tr className="border-b border-gray-200 bg-gray-200 hover:bg-gray-50">
                <td className="p-3 flex items-center">
                  <img src="PRODUCT_IMAGE" alt="PRODUCT_NAME" className="w-12 h-12 rounded-lg mr-4" />
                  <span className="font-medium text-gray-800">PRODUCT_NAME</span>
                </td>
                <td className="p-3 text-gray-700">QUANTITY</td>
                <td className="p-3 text-gray-700">$PRICE</td>
                <td className="p-3 text-gray-700">$TOTAL</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-800 font-medium">$SUBTOTAL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-800 font-medium">$SHIPPING_COST</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Tax</span>
              <span className="text-gray-800 font-medium">$TAX_AMOUNT</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-gray-800 font-semibold">Total</span>
              <span className="text-gray-800 font-semibold">$TOTAL_AMOUNT</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Order;