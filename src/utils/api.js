import axios from 'axios';

let host;
if(process.env.NODE_ENV === 'development'){
    // host = 'http://localhost:8080';
    host = 'http://128.199.85.250:8080';
}else {
    host = 'http://128.199.85.250:8080';
}

const API = {
    makeFileURL: (url, token) => {
        return host + url + "?access_token=" + token;
    },
    login: (email, pass, success) => {
        axios.post(`${host}/api/users/login`, {email: email, password:pass})
        .then(res => {
            success(res);
        });
    },
    getUser: (userId, token, success) => {
        axios.get(`${host}/api/users/${userId}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        }).then(res => {
            success(res);
        })
    },
    register: (name, email, pass, success) => {
        axios.post(`${host}/api/users`, {name: name, email: email, password: pass})
        .then(res => {
            success(res);
        })
        .catch(err => {
            success(err);
        })
    },
    getUsers: (token, success) => {
        axios.get(`${host}/api/users?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    getReceipts: (token, success) => {
        axios.get(`${host}/api/receipts?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    getProductById: (id, token, success) => {
        axios.get(`${host}/api/Products/findOne?access_token=${token}`, {
            params: {
                filter: {
                    where: {id: id},
                    include: {Comment: 'Profile'}
                }
            }
        }).then(res => {
            success(res);
        })
    },
    getProductCount: (success) => {
        axios.get(`${host}/api/Products/count`)
        .then(res => {
            success(res);
        })
    },
    getHomeProductCount: (success) => {
        axios.get(`${host}/api/Products/count`)
        .then(res => {
            success(res);
        })
    },
    getProducts: (token, success) => {
        axios.get(`${host}/api/Products?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    getSiteProducts: (skip, success) => {
        axios.get(`${host}/api/Products`, {
            params: {
                filter: {
                    skip: skip,
                    limit: 10,
                    include: 'ProductImage',
                    fields: {
                        id: true,
                        name: true,
                        supplier: true,
                        author: true,
                        newPrice: true,
                        oldPrice: true,
                        publishing: true,
                        inventory: true,
                        category: true,
                        category1: true,
                        category2: true, category3: true
                    }
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    getCateProducts: (skip, cate, success) => {
        axios.get(`${host}/api/Products`, {
            params: {
                filter: {
                    skip: skip,
                    limit: 10,
                    include: 'ProductImage',
                    where: {category: cate},
                    fields: {
                        id: true,
                        name: true,
                        supplier: true,
                        author: true,
                        newPrice: true,
                        oldPrice: true,
                        publishing: true,
                        inventory: true,
                        category: true,
                        category1: true,
                        category2: true, category3: true
                    }
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    getCate1Products: (skip, cate, success) => {
        axios.get(`${host}/api/Products`, {
            params: {
                filter: {
                    skip: skip,
                    limit: 10,
                    include: 'ProductImage',
                    where: {category1: cate},
                    fields: {
                        id: true,
                        name: true,
                        supplier: true,
                        author: true,
                        newPrice: true,
                        oldPrice: true,
                        publishing: true,
                        inventory: true,
                        category: true,
                        category1: true,
                        category2: true, category3: true
                    }
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    getCate2Products: (skip, cate, success) => {
        axios.get(`${host}/api/Products`, {
            params: {
                filter: {
                    skip: skip,
                    limit: 10,
                    include: 'ProductImage',
                    where: {category2: cate},
                    fields: {
                        id: true,
                        name: true,
                        supplier: true,
                        author: true,
                        newPrice: true,
                        oldPrice: true,
                        publishing: true,
                        inventory: true,
                        category: true,
                        category1: true,
                        category2: true, category3: true
                    }
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    getCate3Products: (skip, cate, success) => {
        axios.get(`${host}/api/Products`, {
            params: {
                filter: {
                    skip: skip,
                    limit: 10,
                    include: 'ProductImage',
                    where: {category3: cate},
                    fields: {
                        id: true,
                        name: true,
                        supplier: true,
                        author: true,
                        newPrice: true,
                        oldPrice: true,
                        publishing: true,
                        inventory: true,
                        category: true,
                        category1: true,
                        category2: true, category3: true
                    }
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    getHomeSiteProducts: (skip, success) => {
        axios.get(`${host}/api/Products`, {
            params: {
                filter: {
                    skip: skip,
                    include: 'ProductImage',
                    fields: {
                        id: true,
                        name: true,
                        supplier: true,
                        author: true,
                        newPrice: true,
                        oldPrice: true,
                        publishing: true,
                        inventory: true,
                        category: true,
                        category1: true,
                        category2: true, category3: true
                    }
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    addProduct: (product,token,success) => {
        axios.post(`${host}/api/Products?access_token=${token}`, product)
        .then(res => {
            success(res);
        });
    },
    updateProduct: (product, token, success) => {
        axios.patch(`${host}/api/Products/${product.id}?access_token=${token}`, product)
        .then(res => {
            success(res);
        })
    },
    getSingleProduct: (id, token, success) => {
        axios.get(`${host}/api/Products/${id}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'ProductImage'
                }
            }
        })
        .then(res => {
            success(res);
        });
    },
    uploadProductImage: (data, token, productId, userId, success) => {
        axios.post(`${host}/api/ProductImages/upload?product_id=${productId}&access_token=${token}&user_id=${userId}`, data)
        .then(res => {
            success(res);
        })
    },
    getCommentById: (commentId, token, success) => {
        axios.get(`${host}/api/Comments/${commentId}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        }).then(res => {
            success(res);
        })
    },
    postComment: (comment, token, success) => {
        axios.post(`${host}/api/Comments?access_token=${token}`, comment, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        }).then(res => {
            success(res);
        })
    },
    setPayment: (receipt, success) => {
        axios.post(`${host}/api/receipts`, receipt)
        .then(res => {
            success(res);
        })
    },
    getAuthorItem: (success) => {
        axios.get(`${host}/api/products`)
    }

}

export default API;