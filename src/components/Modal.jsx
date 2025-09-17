export default function Modal({ showModal, setShowModal, children }) {
    return (
        <>
            <div
                tabIndex={-1}
                className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[100vh] bg-overlay transition-opacity duration-300 ${showModal.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="relative p-4 w-full max-w-md max-h-full z-1">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <button
                            type="button"
                            className={`absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer ${showModal.isOpen && 'z-50'}`}
                            // data-modal-hide="popup-modal"
                            onClick={() => setShowModal({isOpen:false, type:""})}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
