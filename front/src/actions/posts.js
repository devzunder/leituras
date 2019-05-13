import {showLoading, hideLoading} from 'react-redux-loading'
import {savePost} from '../utils/API'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'


export function receivePosts(posts) {
    return{
        type: RECEIVE_POSTS,
        posts
    }
}

export function addPost(data){
    return{
        type: ADD_POST,
        data
    }
}

export function handleAddPost (data){
    return (addPost(data))
}

