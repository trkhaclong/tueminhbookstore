import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import * as AdminActions from '../../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';

import {withFormik, Field, Form} from 'formik';
import {FormikTextField, FormikSelectField} from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';

import {withRouter} from 'react-router-dom';
import * as Yup from 'yup';

import API from '../../../utils/api';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/* global $ */
const styles = theme => ({
    container: {
        margin: theme.spacing(3),
        display: 'flex',
        flexDirection: 'row wrap',
        width: '100%'
    },
    productsImage: {
        width: '100%'
    },
    Save: {
        marginBottom: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing()
    },
    leftSide: {
        flex: 2,
        height: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    rightSide: {
        flex: 1,
        height: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    }
});

class AddProduct extends Component {

    componentDidUpdate(props, state){
        if(this.props.match.params.view === 'add' && this.props.admin.products.filter(p => p.title === this.props.values.title).length >0){
            const product = this.props.admin.products.filter(p => p.title === this.props.values.title)[0];
        }

        if(this.props.admin.product.id !== props.admin.product.id){
            // when redux state changes product in admin reducer
            this.props.setValues(this.props.admin.product);
        }
    }

    uploadProductImage = (e) => {
        const data = new FormData();
        data.append('file', e.target.files[0], new Date().getTime().toString() + e.target.files[0].name);
        this.props.uploadProductImage(data, this.props.auth.token, this.props.admin.product.id, this.props.auth.user.userId);
    }

    componentDidMount(props, state){
        if(this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSingleProduct(this.props.match.params.id, this.props.auth.token);
        }
    }

    modules= {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{'header': 1}, {'header': 2}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'size': ['small', 'medium', 'large', 'huge']}],
            [{'color': []}, {'background': []}],
            ['image'],
            ['clean']
        ]    
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'script',''
    ]

    render(){
        const {classes} = this.props;

        return (
            <div>
                
                <Form className={classes.container}>
                    <Paper className={classes.leftSide}>
                        <FormikTextField
                            name="name"
                            label="Name"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="supplier"
                            label="Supplier"
                            margin="normal"
                        />
                        <FormikTextField
                            name="author"
                            label="Author"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="publishing"
                            label="Publishing"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="category"
                            label="Category"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="category1"
                            label="Category1"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="category2"
                            label="Category2"
                            margin="normal"
                            fullWidth
                        />
                        <ReactQuill
                            value={this.props.values.description}
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="....."
                            onChange={val => this.props.setFieldValue('description', val)}
                        />
                        
                    </Paper>
                    <Paper className={classes.rightSide}>
                        <FormikTextField
                            name="inventory"
                            label="Inventory"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="newPrice"
                            label="NewPrice"
                            margin="normal"
                            fullWidth
                        />
                        <FormikTextField
                            name="oldPrice"
                            label="OldPrice"
                            margin="normal"
                            fullWidth
                        />
                        <div className={classes.Save}>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={e => {
                                this.props.handleSubmit();
                            }}
                            ><SaveIcon />Save</Button>
                        </div>
                        {this.props.admin.product.ProductImage ?
                            this.props.admin.product.ProductImage.length > 0 ?
                                <img src={API.makeFileURL(this.props.admin.product.ProductImage[0].url, this.props.auth.token)} className={classes.productsImage} />
                            :null
                        : null}
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={e => {
                                    $('.productsFile').trigger('click');
                                }}
                                ><ImageIcon />Upload</Button>
                            <input type="file" style={{display: 'none'}} className="productsFile" onChange={this.uploadProductImage}/>
                            
                        </div>
                    </Paper>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    admin: state.admin
});

const mapDispatchToProps = dispatch => ({
    addProduct: (product,token) => {
        dispatch(AdminActions.addProduct(product, token));
    },
    updateProduct: (product, token) => {
        dispatch(AdminActions.updateProduct(product, token));
    },
    getSingleProduct: (id, token) => {
        dispatch(AdminActions.getSingleProduct(id, token));
    },
    uploadProductImage: (data, token, productId, userId) => {
        dispatch(AdminActions.uploadProductImage(data, token, productId, userId))
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: (props) => ({
        name: props.admin.product.name || '',
        supplier: props.admin.product.supplier || '',
        author: props.admin.product.author || '',
        publishing: props.admin.product.publishing || '',
        inventory: props.admin.product.inventory || '',
        newPrice: props.admin.product.newPrice || '',
        oldPrice: props.admin.product.oldPrice || '',
        description: props.admin.product.description || '',
        category: props.admin.product.category || '',
        category1: props.admin.product.category1 || '',
        category2: props.admin.product.category2 || '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        supplier: Yup.string().required(),
        author: Yup.string().required(),
        publishing: Yup.string().required(),
        inventory: Yup.string().required(),
        newPrice: Yup.string().required(),
        description: Yup.string().required(),
        category1: Yup.string().required(),
        category2: Yup.string().required()
    }),
    handleSubmit: (values, {setSubmitting, props}) => {
        console.log("Saving", props.addProduct);
        if(props.match.params.view === 'edit' && props.match.params.id !== 'undefined'){
            const product = {
                ...values,
                id: props.match.params.id
            }
            props.updateProduct(product, props.auth.token);
        }else{
            props.addProduct(values, props.auth.token);
        }
    }
})(withStyles(styles)(AddProduct))));