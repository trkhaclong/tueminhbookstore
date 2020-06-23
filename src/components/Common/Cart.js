import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import * as SiteActions from '../../store/actions/siteActions';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {withStyles} from '@material-ui/core/styles';

import '../assets/css/shop.css';


import CartItems from './CartItems';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import { Popover, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

const styles = theme => ({
    root: {
        display: 'block',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block',
        },
        padding: '4px',
        fontSize: '1.1em',
        borderBottom: '1px solid #ced4da',
        
    },
    sectionMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
        padding: '4px',
        fontSize: '1.1em',
    },
    cartCheck: {
        width: '100%',
    },
    subtotal: {
        paddingBottom: '4px',
        display: '-webkit-flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    subtotalText: {
        [theme.breakpoints.up('md')]: {
            width: 'calc(100% - 150px)'
        },
        width: 'calc(100% - 120px)',
        textAlign: 'right',
    },
    subtotalMoney: {
        [theme.breakpoints.up('md')]: {
            width: '150px'
        },
        width: '120px',
        textAlign: 'right',
    },
    grandtotalText: {
        [theme.breakpoints.up('md')]: {
            width: 'calc(100% - 150px)',
            textAlign: 'right',
        },
        width: 'calc(100% - 120px)',
        fontWeight: '600',
        textAlign: 'left'
    },
    grandtotalMoney: {
        [theme.breakpoints.up('md')]: {
            width: '150px'
        },
        width: '120px',
        textAlign: 'right',
        fontSize: '1.2em',
        fontWeight: '700',
        color: '#f39801'
    },
    back: {
        cursor: 'pointer',
        color: '#555555',
        fontWeight: '600',
        fontSize: '14px',
        width: 'calc(100% - 900px)',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    confirmBtn: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '300px'
        },
    },
    btnBox: {
        display: '-webkit-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        outline: 'none',
        [theme.breakpoints.down('md')]: {
            width: '69%'
        }
    },
    btnOrder: {
        backgroundColor: '#f39801',
        color: 'white',
        border: '1px solid #f39801',
        display: '-webkit-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '1.1em',
        fontWeight: '700',
        transition: 'all 0.3s',
        padding: '8px 0',
        margin: '8px 0',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            padding: '0px 0',
            margin: '0px 0'
        }
    },
    inputText: {
        width: '250px',
        marginBottom: '0px',
        marginRight: '0px',
        [theme.breakpoints.up('md')]: {
            marginRight: '50px',
        }
    },
    typography: {
        padding: theme.spacing(2),
        fontSize: '1.5em',

    }
});


const fields= [
    {name: 'address',type: 'text', placeholder: 'Địa chỉ'},
    {name: 'phone',type: 'tel', placeholder: 'Số Điện Thoại'}
]

class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            anchor: null,
            openerr: false,
            errtext: null,
            halfWidth: 0, halfHeight: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({halfWidth: window.innerWidth/2, halfHeight: window.innerHeight/2});
    }
    
    toggleDrawer = () => {
        if(this.state.open === false){
            if(this.props.site.total > 0){
                this.setState({open: true})
            } else {
                this.setState({errtext: 'Giỏ hàng trống thì mua cái gì @@'})
                this.setState({openerr: true})
            }
        } else {
            this.setState({open: false})
        }
    }

    handleClick = (event) => {
        if(this.props.values.address){
            if(this.props.values.phone){
                this.setState({anchor: event.currentTarget})
            } else {
                this.setState({errtext: 'Không có sđt thì giao hàng kiểu gì @@'})
                this.setState({openerr: true})
            }
        } else {
            this.setState({errtext: 'Không có địa chỉ thì giao đi đâu @@'})
            this.setState({openerr: true})
        }
    }
    
    handleClose = () => {
        this.setState({anchor: null})
        this.setState({openerr: false})
    }

    render(){
        
        const {classes} = this.props;
        const done = Boolean(this.state.anchor);
        const id = done ? 'receipt done' : undefined;

        return(
            <div className="float-cart_content_tm">
                <div className="float-cart_header_tm">
                    <span>
                    <Badge className="bag_tm" badgeContent={this.props.products.length} color="secondary" >
                        <ShoppingCart style={{fontSize: '40px'}} onClick={this.toggleDrawer} color ="primary" /> 
                    </Badge>
                    </span>
                    <span className="header-title_tm">Giỏ Hàng</span>
                </div>
                <div className="float-cart_shelf-container_tm">
                    {
                        this.props.site.addedProducts.map((product, i) => {
                            return(
                                <CartItems 
                                    product={product}
                                    key={i}
                                />
                            )
                        })
                    }    
                </div>
                <div className="float-cart_footer_tm">
                    <div className="sub_tm">Tổng số tiền: </div>
                    <div className="sub-price_tm">
                        <p className="sub-price_val_tm">{this.props.site.total} đ</p>
                        <small className="sub-price_installment_tm">
                            <span></span>
                        </small>
                    </div>
                    
                        <div className="buy-btn_tm" onClick={this.toggleDrawer}>Mua ngay</div>
                    
                </div>
                <Drawer
                    classes={{
                        paper: classes.cartCheck
                    }}
                    anchor="bottom"
                    open={this.state.open}
                    onClose={this.toggleDrawer}
                >
                    <div className="container tmcartsubmit" style={{backgroundColor: 'white'}}>
                        <form onSubmit={e => {
                            e.preventDefault();
                            const receipt = {
                                address: this.props.values.address,
                                phone: this.props.values.phone,
                                products: this.props.site.addedProducts,
                                total: this.props.site.total
                            }
                            this.props.payment(receipt);
                        }}>
                        <div className={classes.sectionDesktop}>
                            <div className={classes.subtotal}>
                                <div className={classes.subtotalText}>Thành tiền</div>
                                <div className={classes.subtotalMoney}>{this.props.site.total} đ</div>
                            </div>
                            <div className={classes.subtotal}>
                                <div className={classes.grandtotalText}>Tổng số tiền</div>
                                <div className={classes.grandtotalMoney}>{this.props.site.total} đ</div>
                            </div>
                        </div>
                        <div className={classes.sectionMobile}>
                            <div className={classes.subtotal}>
                                <div className={classes.grandtotalText}>Tổng số tiền</div>
                                <div className={classes.grandtotalMoney}>{this.props.site.total} đ</div>
                            </div>
                        </div>
                        <Divider />
                        <div className={classes.subtotal}>
                            <Link className={classes.back} onClick={this.toggleDrawer}>
                                <span style={{paddingRight: '8px'}}>
                                    <ArrowBackIcon />
                                </span>
                                <span>Tiếp tục mua sắm</span>
                            </Link>
                            <div className={classes.inputText}>
                                <Field
                                    {...fields[0]}
                                    value={this.props.values[fields[0].name]}
                                    name={fields[0].name}
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                    touched={(this.props.touched[fields[0].name])}
                                    errors={this.props.errors[fields[0].name]}
                                />
                            </div>
                            <div className={classes.inputText}>
                                <Field
                                    {...fields[1]}
                                    value={this.props.values[fields[1].name]}
                                    name={fields[1].name}
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                    touched={(this.props.touched[fields[1].name])}
                                    errors={this.props.errors[fields[1].name]}
                                />
                            </div>
                            <div className={classes.confirmBtn}>
                                <div className={classes.btnBox}>
                                            <button onClick={this.handleClick} name="submitcreate" id="submitcreate" type="submit" title="Thanh toan" className={classes.btnOrder}>
                                                <span>Xác nhận thanh toán</span>
                                            </button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </Drawer>
                <Popover
                    id={id}
                    open={done}
                    onClose={this.handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{top: this.state.halfHeight, left: this.state.halfWidth}}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                >
                    <Typography style={{textAlign: 'center', justifyContent: 'center'}} className={classes.typography}>Cửa hàng đã nhận hóa đơn của bạn<br /><CheckCircleIcon style={{marginTop: '15px'}} color="primary" fontSize="large" /></Typography>
                </Popover>
                <Popover
                    id={id}
                    open={this.state.openerr}
                    onClose={this.handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{top: this.state.halfHeight, left: this.state.halfWidth}}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                >
                    <Typography style={{textAlign: 'center', justifyContent: 'center'}} className={classes.typography}>{this.state.errtext}<br /><ErrorIcon style={{marginTop: '15px'}} color="secondary" fontSize="large" /></Typography>

                </Popover>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        site: state.site,
        products: state.site.addedProducts
})

const mapDispatchToProps = dispatch => {
    return {
        payment: (receipt) => {
            dispatch(SiteActions.setPayment(receipt));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        address: '',
        phone: ''
    }),
    validationSchema: Yup.object().shape({
        address: Yup.string().required('Bắt buộc'),
        phone: Yup.string().required('Bắt buộc')
     }),

     handleSubmit: (values) => {
        console.log("set receipt", values);
     }
})(withStyles(styles)(Cart)));