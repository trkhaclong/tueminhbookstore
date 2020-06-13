import API from '../../utils/api';

export const getUsers = (token) => {
    return (dispatch) => {
        API.getUsers(token, res => {
            dispatch({
                type: 'GOT_USERS',
                payload: res.data
            })
        })
    }
}

export const getProducts = (token) => {
    return dispatch => {
        API.getProducts(token, res => {
            dispatch({
                type: 'GOT_PRODUCTS',
                payload: res.data
            })
        })
    }
}

export const getReceipts = (token) => {
    return dispatch => {
        API.getReceipts(token, res => {
            dispatch({
                type: 'GOT_RECEIPTS',
                payload: res.data
            })
        })
    }
}

export const addProduct = (product, token) => {
    return dispatch => {
        API.addProduct(product, token, res => {
            dispatch({
                type: 'PRODUCT_ADDED',
                payload: res.data
            })
        })
    }
}

export const updateProduct = (product, token) => {
    return dispatch => {
        API.updateProduct(product, token, res => {
            dispatch({
                type: 'UPDATED_PRODUCT',
                payload: res.data
            })
        })
    }
}

export const getSingleProduct = (id , token) => {
    return dispatch => {
        API.getSingleProduct(id, token, res => {
            dispatch({ 
                type: 'GOT_SINGLE_PRODUCT',
                payload: res.data
            })
        })
    }
}

export const uploadProductImage = (data, token, productId, userId) => {
    return dispatch => {
        API.uploadProductImage(data, token, productId, userId, res => {
            dispatch({
                type: 'UPLOAD_PRODUCT_IMAGE',
                payload: res.data
            })
        })
    }
}


export const getPosts = (token) => {
    return dispatch => {
        API.getPosts(token, res => {
            dispatch({
                type: 'GOT_POSTS',
                payload: res.data
            })
        })
    }
}

export const addPost = (post, token) => {
    return dispatch => {
        API.addPost(post, token, res => {
            dispatch({
                type: 'POST_ADDED',
                payload: res.data
            })
        })
    }
}

export const updatePost = (post, token) => {
    return dispatch => {
        API.updatePost(post, token, res => {
            dispatch({
                type: 'UPDATED_POST',
                payload: res.data
            })
        })
    }
}

export const getSinglePost = (id , token) => {
    return dispatch => {
        API.getSinglePost(id, token, res => {
            dispatch({ 
                type: 'GOT_SINGLE_POST',
                payload: res.data
            })
        })
    }
}

export const uploadImage = (data, token, postId, userId) => {
    return dispatch => {
        API.uploadImage(data, token, postId, userId, res => {
            dispatch({
                type: 'UPLOAD_IMAGE',
                payload: res.data
            })
        })
    }
}