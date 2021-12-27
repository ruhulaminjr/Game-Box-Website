import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../images/tv.png";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [render, setRerender] = useState(false);
  const cartItemDeleteHandler = (id) => {
    axios
      .delete(`https://pacific-harbor-02002.herokuapp.com/cartdelete/${id}`)
      .then((result) => {
        console.log(result, "cart delete");
        if (result.data.deletedCount > 0) {
          setRerender(!render);
        }
      });
  };
  const orderApproveHandler = (id) => {
    axios
      .put(`https://pacific-harbor-02002.herokuapp.com/approveCart/${id}`)
      .then((result) => {
        if (result.data.modifiedCount) {
          setRerender(!render);
        }
      });
  };
  useEffect(() => {
    axios
      .get("https://pacific-harbor-02002.herokuapp.com/getcarts")
      .then((result) => {
        setOrders(result.data);
      });
  }, [render]);
  return (
    <div className="bg-gray-900 h-screen w-screen">
      <div className="container mx-auto">
        <div className="flex justify-center pt-10">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex flex-col pt-12">
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {orders.length === 0 ? (
              <h1 className="text-center text-lg mx-auto text-white font-bold">
                You Dont have any Orders || Please Waiting .
              </h1>
            ) : (
              <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Name
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Email
                      </th>

                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Status
                      </th>

                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Delete
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {orders.map((item) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-500">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-500">
                            {item.email}
                          </div>
                        </td>

                        {item.status === "pending" ? (
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                              {item.status}
                            </span>{" "}
                          </td>
                        ) : (
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                              {item.status}
                            </span>{" "}
                          </td>
                        )}

                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                          <button
                            onClick={() => cartItemDeleteHandler(item._id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-500">
                            {item.status === "pending" ? (
                              <button
                                className="primary-btn"
                                onClick={() => orderApproveHandler(item._id)}
                              >
                                Approve
                              </button>
                            ) : (
                              <button
                                className="primary-btn bg-gray-900 text-white opacity-50"
                                disabled
                              >
                                Approved
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
