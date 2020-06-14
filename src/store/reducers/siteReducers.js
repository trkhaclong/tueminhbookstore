
const defaultState = {
    posts: [],
    postCount: 0,
    post: {},
    products: [],
    product: {},
    productCount: 0,
    addedProducts: [],
    total: 0
}

const site = (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_POST_COUNT':
            return {
                ...state,
                postCount: action.payload
            }
        case 'GOT_SITE_POSTS':
            return {
                ...state,
                posts: action.skip ? state.posts.concat(action.payload) : action.payload
            }
        case 'SET_DEFAULT_POST_DATA':
            return {
                ...state,
                post: action.payload
            }
        case 'SET_FULL_POST_DATA': {
            return {
                ...state,
                post: {
                    ...state.post,
                    ...action.payload
                }
            }
        }
        case 'GOT_PRODUCT_COUNT':
            return {
                ...state,
                productCount: action.payload
            }
        case 'GOT_SITE_PRODUCTS':
            return {
                ...state,
                products: action.skip ? state.products.concat(action.payload) : action.payload
            }
        case 'GOT_CATE_PRODUCTS':
            return {
                ...state,
                products: action.skip ? state.products.concat(action.payload) : action.payload
            }
        case 'GOT_CATE1_PRODUCTS':
            return {
                ...state,
                products: action.skip ? state.products.concat(action.payload) : action.payload
            }
        case 'GOT_CATE2_PRODUCTS':
            return {
                ...state,
                products: action.skip ? state.products.concat(action.payload) : action.payload
            }
        case 'GOT_CATE3_PRODUCTS':
            return {
                ...state,
                products: action.skip ? state.products.concat(action.payload) : action.payload
            }
        case 'GOT_HOME_PRODUCTS':
            return {
                ...state,
                products: action.skip ? state.products.concat(action.payload) : action.payload
            }
        case 'SET_DEFAULT_PRODUCT_DATA':
            return {
                ...state,
                product: action.payload
            }
        case 'SET_FULL_PRODUCT_DATA': {
            return {
                ...state,
                product: {
                    ...state.product,
                    ...action.payload
                }
            }
        }
        case 'ADDED_COMMENT': {
            return {
                ...state,
                product: {
                    ...state.product,
                    Comment: state.product.Comment.concat(action.payload)
                }
            }
        }
        case 'ADD_TO_CART':{
            let addedProduct = action.payload
            {
                let existed_product = state.addedProducts.find(product => addedProduct.id === product.id)
                if(existed_product){
                    addedProduct.quantity += 1
                    return{
                        ...state,
                        total: state.total + addedProduct.newPrice
                    }
                }else{
                    addedProduct.quantity = 1;
                    
                    let newToTal = state.total + addedProduct.newPrice
                    return{
                        ...state,
                        addedProducts: [...state.addedProducts, addedProduct],
                        total: newToTal
                    }

                }

                
            }
        }
        case 'REMOVE_PRODUCT': {
            let itemToRemove = state.addedProducts.find(product => action.payload === product.id)
            let new_products = state.addedProducts.filter(product => action.payload !== product.id)

            let newTotal = state.total - (itemToRemove.newPrice * itemToRemove.quantity)

        
            return{
                ...state,
                addedProducts: new_products,
                total: newTotal
            }
        }
        case 'ADD_QUANTITY': {
            let addedProduct = state.addedProducts.find(product => action.payload === product.id)
            
            addedProduct.quantity += 1
            let newTotal = state.total + addedProduct.newPrice
            return {
                ...state,
                total: newTotal
            }
        }
        case 'SUB_QUANTITY': {
            let addedProduct = state.addedProducts.find(product => action.payload === product.id)

            addedProduct.quantity -=1
            let newTotal = state.total - addedProduct.newPrice
            return {
                ...state,
                total: newTotal
            }
        }
        case 'SET_PAYMENT': {
            return {
                ...state,
                total: 0,
                addedProducts: [],
            }
        }

        default:
            return state
    }
}

export default site;