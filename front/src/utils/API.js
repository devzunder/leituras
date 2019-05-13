//exemplos de chamadas com fetch
import axios from 'axios'
import { generateUID } from './functions';

const api = 'http://localhost:3001'
let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

const headers ={
    'Authorization' : token
}
axios.defaults.headers.Authorization = '123123123'


//pegar todas as categorias
export const getCategories = () =>
    axios.get(`${api}/categories`,{headers})
        .then(res => res.data.categories)
//pegar todos os posts
export const getPosts = () =>
    axios.get(`${api}/posts`,{headers})
        .then(res=> res.data)
//Enviar uma nova publicação
export const savePost = (data) =>
    (fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  }).then(res => res.json())
    .then(data => data.posts))







//Pegar posts de uma determinada categoria
export const getCategoriesPost = (category) =>
    axios.get(`${api}/${category}/posts`, {headers})
        .then(res=> res.data)
//Pegar detalhes de um post único
export const getSinglePost = (id) => 
    axios.get(`${api}/posts/${id}`,{headers})
        .then(res=>res.data)
// Votar
export const postVote = (vote, id) =>
    axios.post(`${api}/posts/${id}`,{vote},{headers})
        .then(res=>res.data)
//editar uma publicação
export const editPost = (data,id) =>
    axios.put(`${api}/posts/${id}`,{data},{headers: headers})
        .then(res=>res.data)
//deletar um post
export const deletePost = (id) =>
    axios.delete(`${api}/posts/${id}`,{headers: headers})
        .then(res=>res.data)
    
//Comentários
//Enviar uma nova Comentário
export const saveComment = (data) =>
    axios.post(`${api}/comments`,{data},{headers: headers})
        .then(res=>res.data)
//Pegar todos os comentários de um post
export const getComments = (id) =>
    axios.get(`${api}/${id}/comments`, {headers})
        .then(res=> res.data)
//Pegar comentários de um post
export const getSingleComments = (id) => 
    axios.get(`${api}/comments/${id}`,{headers})
        .then(res=>res.data)
// Votar em um Comentário
export const postVoteComment = (vote, id) =>
    axios.post(`${api}/comments/${id}`,{vote},{headers})
        .then(res=>res.data)
//editar um Comentário
export const editComment = (data,id) =>
    axios.put(`${api}/comments/${id}`,{data},{headers: headers})
        .then(res=>res.data)
//deletar um Comentário
export const deleteComment = (id) =>
    axios.delete(`${api}/comments/${id}`,{headers: headers})
        .then(res=>res.data)
  
