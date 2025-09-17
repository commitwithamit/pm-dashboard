import { useEffect, useState } from "react";
import ProductLayout from "../components/ProductLayout";
import { useProducts } from "../hooks/useProducts";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ProductForm from "../components/ProductForm";
import ConfirmDelete from "../components/ConfirmDelete";
import Loader from "../components/Loader";

export default function Dashboard() {
    const { products, loading, addProduct, updateProduct, deleteProduct, filterCategory } = useProducts();
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState({ isOpen: false, type: "" });
    const [editData, setEditData] = useState("");
    const [deleteId, setDeleteId] = useState("");


    const filterByTitle = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <main>
            {/* search bar & add product button */}
            <Header search={search} setSearch={setSearch} filterCategory={filterCategory} setShowModal={setShowModal} />

            {/* products displayed here */}
            {
                loading ? <Loader /> :
                    <ProductLayout
                        products={filterByTitle}
                        onEdit={setEditData}
                        onDelete={setDeleteId}
                        setShowModal={setShowModal}
                    />
            }

            {/* products edit form inside a Modal */}
            <Modal showModal={showModal} setShowModal={setShowModal}>
                {
                    showModal.type === "form" &&
                    <ProductForm
                        initialData={editData}
                        onSubmit={(data) => {
                            if (editData) {
                                updateProduct(editData.id, data);
                                setEditData(null);
                            } else {
                                addProduct(data);
                            }
                        }}
                        setShowModal={setShowModal}
                    />
                }
                {
                    showModal.type === "delete" &&
                    <ConfirmDelete
                        deleteId={deleteId}
                        handleDelete={deleteProduct}
                        setShowModal={setShowModal}
                    />
                }
            </Modal>
        </main>
    )
}
