import React, {Component} from 'react';

import AuthorItems from '../Common/AuthorItems';


const authors = [
    {}
];

class Authors extends Component {

    componentDidMount() {
        
    }
    render(){
        return(
            <>
                <div className="page-empty-banner col-lg-12 col-md-12 col-sm-12">
                    <div className="page-banner page-banner-tm">
                        <Link to="/">
                            <img src={image} alt="" />
                        </Link>
                    </div>
                    <div className="col-main">
                        <div className="container">
                            <div className={classes.storeButton}>
                                <Button className={classes.buttonSize} onClick={this.toggleDrawer}>Tác giả</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row tmshop">
                        <AuthorItems />
                    </div>
                </div>
                
            </>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Authors)));