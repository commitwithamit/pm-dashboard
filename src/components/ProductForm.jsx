import { LuImageUp } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function ProductForm({ initialData, onSubmit, setShowModal }) {
    const [formData, setFormData] = useState({
        image: null,
        title: "",
        description: "",
        category: "",
        price: "",
        rating: { rate: "", count: "" },
    });

    useEffect(() => {
        if (initialData) setFormData(initialData);
    }, [initialData]);

    function handleChange(e) {
        const { name, files, value, type } = e.target;
        console.log(name, files, value);
        
        if (type === "file" && files && files[0]) {
            const fileURL = URL.createObjectURL(files[0]);
            setFormData((prev) => ({
                ...prev,
                image: fileURL,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }

    function handleForm(e) {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            image: null,
            title: "",
            description: "",
            category: "",
            price: "",
            rating: {},
        });
        setShowModal({ isOpen: false, type: "" });
    }

    return (
        <>
            <form className="max-w-md mx-auto p-4 md:p-5" onSubmit={handleForm}>
                {/* image or upload image */}
                <div className={`flex items-center justify-center relative mb-5 ${formData.image ? 'w-[max-content] m-auto' : 'w-full'}`}>
                    {
                        formData.image ?
                            <label
                                htmlFor="upload-img"
                            >
                                <img src={formData.image} alt="product image" className="w-[120px]" />
                                <span className="w-[30px] h-[30px] bg-blue-300 rounded-full flex justify-center items-center absolute -bottom-2 -right-2 cursor-pointer">
                                    <LuImageUp />
                                </span>
                                <input id="upload-img" name="image" type="file" className="hidden" onChange={handleChange} />
                            </label> :

                            <label
                                htmlFor="dropzone-file"
                                onDrop={hell}
                                className="flex flex-col items-center justify-center w-full h-35 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload product image</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG,   JPG or webP
                                    </p>
                                </div>
                                <input id="dropzone-file" name="image" type="file" className="hidden" onChange={handleChange} />
                            </label>
                    }
                </div>

                {/* titel */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="title"
                        id="floating_title"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="floating_title"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Title
                    </label>
                </div>

                {/* Description */}
                <div className="relative z-0 w-full mb-5 group">
                    <textarea
                        name="description"
                        id="floating_repeat_Description"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        value={formData.description}
                        rows={3}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="floating_repeat_Description"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Description
                    </label>
                </div>

                {/* Category */}
                <div className="relative z-0 w-full mb-5 group">
                    <>
                        <label htmlFor="underline_select" className="sr-only">
                            Category
                        </label>
                        <select
                            id="underline_select"
                            required
                            value={formData.category}
                            name="category"
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        >
                            <option >Choose a category</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="women's clothing">women's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                        </select>
                    </>

                </div>

                {/* Price */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="number"
                        name="price"
                        id="floating_price"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="floating_price"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Price
                    </label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Rating */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="rating"
                            id="floating_rating"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            min={0}
                            max={5}
                            step="any"
                            value={formData.rating.rate}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                rating: ({ ...prev.rating, rate: Number(e.target.value) })
                            }))}
                        />
                        <label
                            htmlFor="floating_rating"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Rating
                        </label>
                    </div>

                    {/* count */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="floating_count"
                            id="floating_count"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                            value={formData.rating.count}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev,
                                rating: ({ ...prev.rating, count: Number(e.target.value) })
                            }))}
                        />
                        <label
                            htmlFor="floating_count"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Count
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Save Changes
                </button>
            </form>
        </>
    )
}

// {
//     id: 1,
//     image: upload,
//     title: text
//     description: text
//     category: dropdown
//     price: number,
//     rating: { rate: 3.9, count: 120 },
// }