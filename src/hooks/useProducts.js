import { useEffect, useState } from "react";
import { fetchRequest, addRequest, updateRequest, deleteRequest, filterCategoryRequest } from "../api/productsApi";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRequest().then((response) => {
            setProducts(response.data);
            setLoading(false);
        });
    }, []);


    const addProduct = async (newProduct) => {
        const response = await addRequest(newProduct);
        const savedProduct = { ...response.data, rating: newProduct.rating ?? { rate: 0, count: 0 } }
        setProducts(prev => [...prev, savedProduct]);
    }

    const updateProduct = async (id, update) => {
        await updateRequest(id, update);
        setProducts(prev =>
            prev.map(item => item.id === id
                ? { ...item, ...update }
                : item
            ));
    }

    const deleteProduct = async (id) => {
        await deleteRequest(id);
        setProducts(prev => {
            const update = prev.filter(item => item.id !== id)
            return update;
        });
    }

    const filterCategory = async (categroy) => {
        if (categroy !== "") {
            const response = await filterCategoryRequest(categroy.toLowerCase());
            setProducts(response.data);
        } else {
            fetchRequest().then((response) => {
                setProducts(response.data);
            });
        }
    }

    return { products, loading, addProduct, updateProduct, deleteProduct, filterCategory };
}