import API from '../../utils/api';

export const getPosts = (skip) => {
    return dispatch => {
        API.getSitePosts(skip, res => {
            dispatch({
                type: 'GOT_SITE_POSTS',
                payload: res.data,
                skip: skip,
            });
        })
    }
}

export const getPostCount = () => {
    return dispatch => {
        API.getPostCount(res => {
            dispatch({
                type: 'GOT_POST_COUNT',
                payload: res.data.count
            });
        })
    }
}

export const getPostBySlug = (slug, token) => {
    return dispatch => {
        API.getPostBySlug(slug, token, res => {
            dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: res.data
            })
        })
    }
}


export const setPostData = (post) => {
    return dispatch => {
        dispatch({
            type: 'SET_DEFAULT_POST_DATA',
            payload: post
        });
    }
}

export const getProducts = (skip) => {
    return dispatch => {
        API.getSiteProducts(skip, res => {
            dispatch({
                type: 'GOT_SITE_PRODUCTS',
                payload: res.data,
                skip: skip,
            });
        })
    }
}

export const getCateProducts = (skip, cate) => {
    return dispatch => {
        API.getCateProducts(skip, cate, res => {
            dispatch({
                type: 'GOT_CATE_PRODUCTS',
                payload: res.data,
                skip: skip,
            });
        })
    }
}
export const getCate1Products = (skip, cate) => {
    return dispatch => {
        API.getCate1Products(skip, cate, res => {
            dispatch({
                type: 'GOT_CATE1_PRODUCTS',
                payload: res.data,
                skip: skip,
            });
        })
    }
}
export const getCate2Products = (skip, cate) => {
    return dispatch => {
        API.getCate2Products(skip, cate, res => {
            dispatch({
                type: 'GOT_CATE2_PRODUCTS',
                payload: res.data,
                skip: skip,
            });
        })
    }
}

export const getHomeProducts = (skip) => {
    return dispatch => {
        API.getHomeSiteProducts(skip, res => {
            dispatch({
                type: 'GOT_HOME_PRODUCTS',
                payload: res.data,
                skip: skip,
            });
        })
    }
}



export const getProductCount = () => {
    return dispatch => {
        API.getProductCount(res => {
            dispatch({
                type: 'GOT_PRODUCT_COUNT',
                payload: res.data.count
            });
        })
    }
}

export const getProductById = (id, token) => {
    return dispatch => {
        API.getProductById(id, token, res => {
            dispatch({
                type: 'SET_FULL_PRODUCT_DATA',
                payload: res.data
            })
        })
    }
}


export const setProductData = (product) => {
    return dispatch => {
        dispatch({
            type: 'SET_DEFAULT_PRODUCT_DATA',
            payload: product
        });
    }
}
export const addToCart = (product) => {
    return dispatch => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product,
        })
    }
}
export const removeProduct = (id) => {
    return dispatch => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: id
        })
    }
}
export const subtractQuantity = (id) => {
    return dispatch => {
        dispatch({
            type: 'SUB_QUANTITY',
            payload: id
        })
    }
}
export const addQuantity = (id) => {
    return dispatch => {
        dispatch({
            type: 'ADD_QUANTITY',
            payload: id
        })
    }
}

export const postComment = (comment, token) => {
    return dispatch => {
        API.postComment(comment, token, res => {
            if(res.status === 200){
                API.getCommentById(res.data.id, token, res2 => {
                    dispatch({
                        type: 'ADDED_COMMENT',
                        payload: res2.data
                    })
                })
            }
        })
    }
}
export const setPayment = (receipt) => {
    return dispatch => {
        API.setPayment(receipt, res => {
            dispatch({
                type: 'SET_PAYMENT',
                payload: res.data
            })
        })
    }
}