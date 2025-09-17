import axios from "axios";

const ApiURL = "https://fakestoreapi.com/products";

export const fetchRequest = () => axios.get(ApiURL);
export const addRequest = (product) => axios.post(ApiURL, product);
export const updateRequest = (id, product) => axios.put(`${ApiURL}/${id}`, product);
export const deleteRequest = (id) => axios.delete(`${ApiURL}/${id}`);
export const filterCategoryRequest = (category) => axios.get(`${ApiURL}/category/${category}`);