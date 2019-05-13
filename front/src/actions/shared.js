import {receiveCategories} from './categories'
import {receivePosts} from './posts'
import {showLoading, hideLoading} from 'react-redux-loading'
import { getCategories,getPosts,getComments } from '../utils/API';
import { receiveComments } from './comments';


function getInitialData () {
    return Promise.all([
      getCategories(),
      getPosts(),
    ]).then(([categories, posts]) =>({
        categories,
        posts,
    }))
}


export function handleInitialData() {
    return (dispatch) =>{
        dispatch(showLoading())
        return getInitialData()
        .then(({categories, posts}) => {
            dispatch(receiveCategories(categories))
            dispatch(receivePosts(posts))
            dispatch(hideLoading())
        })
    }
}





