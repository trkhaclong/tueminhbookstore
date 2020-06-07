import React, {Component} from 'react';
import TableView from '../../Common/TableView';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import * as AdminActions from '../../../store/actions/adminActions'; 
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';   

const columns = [
    {label: 'ID', name: 'id'},
    {label: 'Name', name: 'name'}
]

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    }
})

class Products extends Component {

    componentDidMount(){
        this.props.getProducts(this.props.auth.token);
    }
    render(){
        const products = this.props.admin.products;
        const {classes} = this.props;
        return (
            <div>
                <h1>Products</h1>
                <TableView
                    columns={columns}
                    rows={products}
                    link='products'
                />
                <Fab component={RouterLink} to="/admin/products/add" color="secondary" aria-label="Add" className={classes.fab}>
                    <EditIcon />
                </Fab>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (token) => {
            dispatch(AdminActions.getProducts(token));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Products));