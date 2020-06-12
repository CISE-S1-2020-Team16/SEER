import axios from 'axios'
require('dotenv').config()

const api = axios.create({
    baseURL : process.env.baseURL || "https://seer-staging.herokuapp.com/api",
})

export const insertArticle = payload => api.post(`/article`, payload)
export const getAllArticles = () => api.get(`/articles`)
export const updateArticleById = (id, payload) => api.put(`/article/${id}`, payload)
export const deleteArticleById = id => api.delete(`/article/${id}`)
export const getArticleById = id => api.get(`/article/${id}`)

const apis = {
    insertArticle,
    getAllArticles,
    updateArticleById,
    deleteArticleById,
    getArticleById,
}

export default apis
