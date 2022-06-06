import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import { useAuth } from "context/AuthProvider";
import { writeNewPost, getPosts } from "realtime_database_utils/posts";
export default function Posts({ color = "light" }) {
  const { currentUser } = useAuth();

  const addNewPost = async (picture, title, body) => {
    writeNewPost(
      (picture = "test picture"),
      (title = "test title"),
      (body = "test body")
    );
  };

  const posts = getPosts();

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
            }
          >
            <div className="px-4 py-3 mb-0 border-0 rounded-t">
              <div className="flex flex-wrap items-center">
                <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                  >
                    Card Tables
                  </h3>

                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear bg-transparent border border-solid rounded outline-none text-blueGray-500 border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 focus:outline-none"
                    type="button"
                    onClick={addNewPost}
                  >
                    Add new post
                  </button>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Project
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Budget
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Status
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Users
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Completion
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {posts &&
                    posts.map((post) => {
                      return (
                        <tr key={post[0]}>
                          <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <img
                              src="/img/bootstrap.jpg"
                              className="w-12 h-12 bg-white border rounded-full"
                              alt="..."
                            ></img>{" "}
                            <span
                              className={
                                "ml-3 font-bold " +
                                +(color === "light"
                                  ? "text-blueGray-600"
                                  : "text-white")
                              }
                            >
                              {post[0]}
                            </span>
                          </th>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            $2,500 USD
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <i className="mr-2 text-orange-500 fas fa-circle"></i>{" "}
                            pending
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <div className="flex">
                              <img
                                src="/img/team-1-800x800.jpg"
                                alt="..."
                                className="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                              ></img>
                              <img
                                src="/img/team-2-800x800.jpg"
                                alt="..."
                                className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                              ></img>
                              <img
                                src="/img/team-3-800x800.jpg"
                                alt="..."
                                className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                              ></img>
                              <img
                                src="/img/team-4-470x470.png"
                                alt="..."
                                className="w-10 h-10 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                              ></img>
                            </div>
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2">60%</span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                                  <div
                                    style={{ width: "60%" }}
                                    className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {/* <TableDropdown />  */}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Posts.layout = Admin;
