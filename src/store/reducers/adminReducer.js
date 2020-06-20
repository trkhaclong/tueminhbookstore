// import {CardActions} from "@material-ui/core";

const defaultState = {
    users: [],
    products: [],
    product: {},
    receipt: {},
    receipts: []
}

const admin = (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_USERS':
            return {
                ...state,
                users: action.payload
            }
        
        case 'GOT_RECEIPTS':
            return {
                ...state,
                receipts: action.payload
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