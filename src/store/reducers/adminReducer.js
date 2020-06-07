// import {CardActions} from "@material-ui/core";

const defaultState = {
    users: [],
    posts: [],
    post: {},
    products: [],
    product: {}
}

const admin = (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_USERS':
            return {
                ...state,
                users: action.payload
            }
            case 'GOT_POSTS':
                return {
                    ...state,
                    posts: action.payload
                }
            case 'POST_ADDED':
                return {
                    ...state,
                    posts: state.posts.concat(action.payload),
                    post: action.payload
                }
            case 'UPDATED_POST':
                return {
                    ...state,
                    post: action.payload,
                    posts: state.posts.map(p => {
                        if(p.id === action.payload.id){
                            return {
                                ...p,
                                ...action.payload
                            }
                        }else{
                            return p
                        }
                    })
                }
            case 'UPLOAD_IMAGE': 
                return{
                    ...state,
                    post: {
                        ...state.post,
                        PostImage: [action.payload]
                    }
                }
            case 'GOT_SINGLE_POST':
                return {
                    ...state,
                    post: action.payload
                }



                
            case 'GOT_PRODUCTS':
                return {
                    ...state,
                    products: action.payload
                }
            case 'PRODUCT_ADDED':
                return {
                    ...state,
                    products: state.products.concat(action.payload),
                    product: action.payload
                }
            case 'UPDATED_PRODUCT':
                return {
                    ...state,
                    product: action.payload,
                    products: state.products.map(p => {
                        if(p.id === action.payload.id){
                            return {
                                ...p,
                                ...action.payload
                            }
                        }else{
                            return p
                        }
                    })
                }
            case 'UPLOAD_PRODUCT_IMAGE': 
                return{
                    ...state,
                    product: {
                        ...state.product,
                        ProductImage: [action.payload]
                    }
                }
                
            case 'GOT_SINGLE_PRODUCT':
                return {
                    ...state,
                    product: action.payload
                }
            
        default:
            return state
    }
}

export default admin;