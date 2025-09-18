import { Link } from "react-router-dom";
import { rupee } from "../utility/CustomFunctions";
import { FiEdit } from "react-icons/fi"; import Rating from "./Rating";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

export default function ProductLayout({ products, onEdit, onDelete, setShowModal }) {
    return (
        <section className="site-width py-[10rem] flex justify-center flex-wrap  gap-x-[3rem] gap-y-[10rem]">
            {
                products.map((item) => {
                    return (
                        <div className="w-full max-w-[22rem] bg-white border border-gray-200 rounded-t-[160px] rounded-b-[20px] shadow-sm h-auto flex flex-col" key={item.id} >

                            {/* product image */}
                            <Link to="#" className="flex justify-center mt-[-108px]">
                                <img
                                    className="p-8 w-[65%] aspect-square object-contain drop-shadow-xl/50"
                                    src={item.image}
                                    alt="product image"
                                />
                            </Link>

                            <div className="px-5 pb-5 flex flex-col flex-1">

                                {/* product title */}
                                <Link to="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900  line-clamp-2 mb-2">
                                        {item.title}
                                    </h5>
                                </Link>

                                <p className="tracking-tight text-gray-500 leading-4 line-clamp-3 text-[14px]">
                                    {item.description}
                                </p>

                                {/* Rating stars */}
                                <div className="flex items-center mt-2.5 mb-5">
                                    <Rating rate={item.rating.rate} />
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    {/* price */}
                                    <span className="text-3xl font-bold text-gray-900">
                                        {rupee(item.price)}
                                    </span>

                                    <span className="flex items-center justify-center gap-3">
                                        {/* Edit buttons */}
                                        <button
                                            className="cursor-pointer"
                                            type="button"
                                            onClick={() => {
                                                setShowModal({ isOpen: true, type: "form" });
                                                onEdit(item);
                                            }}
                                        >
                                            <FiEdit className="text-[1.18rem] text-indigo-900" />
                                        </button>

                                        {/* Delete buttons */}
                                        <button
                                            className="cursor-pointer"
                                            type="button"
                                            onClick={() => {
                                                setShowModal({ isOpen: true, type: "delete" });
                                                onDelete(item.id);
                                            }}>
                                            <RiDeleteBin6Line className="text-[1.2rem] text-red-600" />
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

// {
//     category: "men's clothing",
//     description: "Your perfect pack for everyday use and walks in the forest.   Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     id: 1,
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     price: 109.95,
//     rating: { rate: 3.9, count: 120 },
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// }