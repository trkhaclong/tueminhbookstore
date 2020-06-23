import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {connect} from 'react-redux';
import * as AuthActions from '../store/actions/authActions';


import classNames from 'clsx';
import {fade, withStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//Drawer imports
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import StoreIcon from '@material-ui/icons/Store';
import CallIcon from '@material-ui/icons/Call';

import img1 from './assets/img/logotm.png';
import img2 from './assets/img/logotext1.png';
import profileIcon from './assets/img/profile-icon.png'

import Cart from './Common/Cart';

const logoWidth = 80;

const styles = theme => ({
    root: {
        display: 'block',
    },
    toolbar: {
        [theme.breakpoints.down('md')]: {
            padding: '0',
        },
    },
    appBar: {
        backgroundColor: 'white',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarSpace: theme.mixins.toolbar,
    content: {
        width: '100%',
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '100vh',
        overflow: 'auto',
        [theme.breakpoints.down('md')]: {
            padding: 0,
        },
        [theme.breakpoints.down('xs')]: {
            overflow: 'inherit',
        },
    },
    grow: {
        flexGrow: 1,
        textAlign: 'center',
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black',
    },
    title: {
        width: '30%',
        display: 'block',
        [theme.breakpoints.up('lg')]: {
            width: '16%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '20%',
            float: 'left'
        }
    },
    logoIcon: {
        position: 'relative',
        width: '80px',
        height: '50px',
    },
    titleText: {
        width: `calc(100% - ${logoWidth}px)`,
        height: '50px',
        
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    search: {

        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        width: '40%',
        height: '40px',
        [theme.breakpoints.up('lg')]: {
            marginRight: theme.spacing(2),
            width: '58%',
            marginLeft: '69px'
        },
    },
    searchIcon: {
        color: 'black',
        padding: theme.spacing(0, 2),
        height: '100%',
        width: '30px',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        height: '40px',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height:'40px',
    },
    buttonStore: {
        borderRight: '1px solid',
        width: '40%',
        fontSize: 'large',
        fontFamily: 'monospace',
        color: '#d6993a',
        [theme.breakpoints.down('xs')]: {
            fontSize: 'medium',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 'x-large',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 'xx-large',
        },
    },
    buttonContact: {
        width: '1000%',
        fontSize: 'large',
        fontFamily: 'monospace',
        color: '#d6993a',
        textAlign: 'right'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    mobileMenu: {
    },
    cartDrawer: {
        width: '70%',
        [theme.breakpoints.up('md')]: {
            width: '30%'
        }
    },
    profile: {
        margin: '0',
        padding: '0',
        outline: '0'
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
    },
    imgRound: {
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(0,0,0,.1)',
        overflow: 'hidden',
        marginRight: '16px',
        flexShrink: '0'
    },
    imgProfile: {
        display: 'block',
        width: '100%',
        height: '100%'
    },
    nameProfile: {
        fontSize: '24px',
        lineHeight: '28px'
    },
    ageProfile: {
        color: '#999'
    },
    profileDrawer: {

    },
    logOutContainer: {
        minHeight: '100px',
        marginTop: '100px',
        width: '100%',
        textAlign: 'center'
    },
    logOutButton: {
        display: 'inline-block',
        color: '#fff',
        backgroundColor: '#E48681',
        borderColor: 'rbga(0,0,0,0.3)',
        textShadow: '0 1px 0 rbga(0,0,0,0.5)',
        letterSpacing: '2px',
        fontSize: '12px',
        padding: '10px 30px',
        borderRadius: '5px',
        border: '1px solid rbga(0,0,0,0.3)',
        borderBottomWidth: '3px',
        textDecoration: 'none',
        margin: '0 10px'
    },
});

class PageWrapper extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            anchor: null,
            profile: false
        }
    }
    
    toggleDrawer = () => {
        if(this.state.open){
            this.setState({open: false})
        }else{
            this.setState({open: true})
        }
    }

    toggleProfileDrawer = () => {
        if(this.state.profile){
            this.setState({profile: false})
        }else{
            this.setState({profile: true})
        }
    }

    handleClick = (event) => {
        this.setState({anchor: event.currentTarget})
    }

    handleClose = () => {
        this.setState({anchor: null})
    }


    render(){
        const {classes} = this.props;
        

        
        const mobileMenuId = 'primary-search-account-menu-mobile';
        
        return(
		<div className={classNames(classes.root, classes.grow)}>
            <AppBar  className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    
                    <Typography className={classes.title}
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                    >
                        <Link href="/">
                            <img className={classes.logoIcon} src={img1} alt="" />
                            <img className={classes.titleText} src={img2} alt=""/>
                        </Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon 
                                fontSize="large"
                            />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}>
                        <div className={classes.buttonStore}>
                            <IconButton>
                                <Link href='/shop' color='inherit'>
                                    <StoreIcon fontSize="large" color="primary" />
                                </Link>
                            </IconButton>
                        </div>
                        <div className={classes.buttonContact}>
                            <IconButton arial-label="" color="inherit">
                                <Badge badgeContent={this.props.site.addedProducts.length} color="secondary" >
                                        <ShoppingCart fontSize="large" onClick={this.toggleDrawer} color ="primary" />
                                    
                                </Badge>
                            </IconButton>
                        </div>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <a href='https://facebook.com/1723023664478547' color='inherit'>
                            <IconButton arial-label="" color="inherit">
                                <CallIcon fontSize="large" color="primary"/>
                            </IconButton>
                        </a>
                        {this.props.auth.token ?
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls=""
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.toggleProfileDrawer}
                            >
                                <AccountCircle fontSize="large" color="primary" />
                            </IconButton>
                        :<IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls=""
                            aria-haspopup="true"
                            color="inherit"
                            component={RouterLink} to="/login"
                        >
                            <AccountCircle fontSize="large" color="primary" />
                        </IconButton>}
                        
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        >
                        <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                
            </AppBar>
            <Menu
                className={classes.mobileMenu}
                anchorEl={this.state.anchor}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                keepMounted
                id={mobileMenuId}
                transformOrigin={{vertical: 'top', horizontal:'right'}}
                open={Boolean(this.state.anchor)}
                onClose={this.handleClose}
            >
                <MenuItem onClick={this.toggleDrawer}>
                    <a href='https://facebook.com/1723023664478547' color='inherit'>
                        <IconButton arial-label="" color="inherit">
                            <CallIcon fontSize="large" color="primary"/>
                        </IconButton>
                    </a>
                    <p>Liên Hệ</p>
                </MenuItem>
                <MenuItem>
                    {this.props.auth.token ?
                        <IconButton onClick={this.toggleProfileDrawer} color="inherit">
                            <AccountCircle fontSize="large" />
                        </IconButton>
                    :<IconButton component={RouterLink} to="/login" color="inherit">
                        <AccountCircle fontSize="large" />
                    </IconButton>}
                    <p>Profile</p>
                </MenuItem>
            </Menu>
            <Drawer
                classes={{
                    paper: classes.cartDrawer
                }}
                anchor="right"
                open={this.state.open} 
                onClose={this.toggleDrawer}
            >
                
                <Divider />
                <Cart />
            </Drawer>
            {this.props.auth.token ?
                <Drawer
                    classes={{
                        paper: classes.profileDrawer
                    }}
                    anchor="top"
                    open={this.state.profile}
                    onClose={this.toggleProfileDrawer}
                >
                    <div className={classes.profile}>
                        <section className={classes.profileHeader}>
                            <div className={classes.imgRound}>
                                <img className={classes.imgProfile} src={profileIcon} alt="Profile" />
                            </div>
                            <div className={classes.logOutContainer}>
                                <p>
                                    <button className="logout-btn-tm" onClick={() => {this.props.logout()}}>Đăng xuất</button>
                                </p>
                            </div>
                        </section>
                    </div>
                </Drawer>
            :null}
            <main className={classes.content}>
                <div className={classes.appBarSpace} />
                {this.props.children}
            </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site,
    auth: state.auth
})
const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(AuthActions.logout());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PageWrapper));