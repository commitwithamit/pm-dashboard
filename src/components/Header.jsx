import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Header({ search, setSearch, filterCategory, setShowModal }) {
    useEffect(() => {
        initFlowbite();
    }, []);
    const [dropDown, setDropDown] = useState("");
    return (
        <div className="pt-8 site-width">
            <div className="flex items-center justify-end gap-[15px] flex-col md:flex-row md:gap-10 border-b border-blue-200 py-5 shadow-[0px_18px_34px_-27px_#000] bg-white px-5">
                <div className="flex items-center lg:w-[28rem] max-w-sm">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                            placeholder="Search products..."
                            required=""
                        />
                    </div>
                </div>

                <div>
                    <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-delay="300"
                        data-dropdown-trigger="hover"
                        className="text-blue-700 border border-blue-700 rounded-lg focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex justify-between items-center   "
                        type="button"
                    >
                        {dropDown !== "" ? dropDown : "All Categories"}{" "}
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div
                        id="dropdownHover"
                        className="z-10 -top-[10px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 hidden"
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownHoverButton"
                        >
                            <li
                                onClick={() => {
                                    filterCategory("")
                                    setDropDown("")
                                }}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            >
                                All Categories
                            </li>
                            <li
                                onClick={() => {
                                    filterCategory("Men's Clothing");
                                    setDropDown("Men's Clothing");
                                }}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            >
                                Men's Clothing
                            </li>
                            <li
                                onClick={() => {
                                    filterCategory("Women's Clothing");
                                    setDropDown("Women's Clothing");
                                }}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            >
                                Women's Clothing
                            </li>
                            <li
                                onClick={() => {
                                    filterCategory("Jewelery");
                                    setDropDown("Jewelery");
                                }}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            >
                                Jewelery
                            </li>
                            <li
                                onClick={() => {
                                    filterCategory("Electronics");
                                    setDropDown("Electronics");
                                }}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            >
                                Electronics
                            </li>
                        </ul>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        setShowModal({ isOpen: true, type: "form" })
                    }}
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex items-center cursor-pointer"
                >
                    <IoIosAddCircleOutline className="w-5 h-5 me-2" />
                    Add Product
                </button>
            </div>
        </div>

    )
}
