import axios from 'axios';

const CATEGORY_API = '/api/categories';

export const getAllCategories = () => axios.get(CATEGORY_API);
export const createCategory = (category) => axios.post(CATEGORY_API, category);
export const updateCategory = (id, category) => axios.put(`${CATEGORY_API}/${id}`, category);
export const deleteCategory = (id) => axios.delete(`${CATEGORY_API}/${id}`);
