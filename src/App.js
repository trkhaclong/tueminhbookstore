import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import '../src/components/assets/loader';
import './components/assets/css/page.css';

import ErPage from './components/Pages/ErPage';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Blog from './components/Pages/Blog';
import Single from './components/Pages/Single';
import SingleProduct from './components/Pages/SingleProduct';

import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';

//Admin Pages
import Dashboard from './components/Pages/Admin/DashBoard';
import Posts from './components/Pages/Admin/Posts';
import Users from './components/Pages/Admin/Users';
import AddPost from './components/Pages/Admin/AddPost';
import Products from './components/Pages/Admin/Products';
import AddProduct from './components/Pages/Admin/AddProduct';
import Receipts from './components/Pages/Admin/Receipts';


import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';
import PageWrapper from './components/PageWrapper';

import Footer from './components/Common/Footer';

import ShopCategory from './components//Pages/ShopCategory';

class App extends Component {


  render(){
    return (
        <Router>

          <Route
            path='/admin/users'
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Users />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />
          <Route
            path='/admin/receipts'
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Receipts />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />

          <Route
            path='/admin/products/:view/:id'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddProduct />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />

          <Route
            path='/admin/products/:view'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddProduct />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />
          <Route
            path='/admin/products'
            exact={true}
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Products />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />

          <Route
            path='/admin/posts/:view/:id'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />

          <Route
            path='/admin/posts/:view'
            exact={true}
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
                }
                </div>
              )
            }}
          />
          <Route
            path='/admin/posts'
            exact={true}
            render={props => {
              return(
                <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                :
                <PageWrapper>
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                </PageWrapper>
              }
              </div>
              
              )
            }}
          />

          <Route
            exact={true}
            path="/admin"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  :
                  <PageWrapper>
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  </PageWrapper>
                  }
                </div>
              )
            }}
          />
          <Route
            exact={true}
            path="/login"
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    
                    <Redirect to="/" />
                  :
                  <PageWrapper>
                    <LoginWrapper>
                      <Login />
                      <Footer />
                    </LoginWrapper>
                  </PageWrapper>
                  }
                </div>
              )
            }}
          />
          
          <Route 
            exact={true}
            path="/signup"
            render={props => {
              if(this.props.auth.token){
                return (
                  <Redirect to="/" />
                )
              }else{
                return (
                  <PageWrapper>
                    <LoginWrapper>
                      <SignUp />
                      <Footer />
                    </LoginWrapper>
                  </PageWrapper>
                )
              }
            }}
          />

          <Route 
            exact={true}
            path="/"
            render={props => (
              <PageWrapper>
                <Home {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route 
            exact={true}
            path="/shop"
            render={props => (
              <PageWrapper>
                <Shop {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          
          <Route 
            exact={true}
            path="/shop/:category/:category1/:category2/:category3"
            render={props => (
              <PageWrapper>
                <ShopCategory {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/shop/:category"
            render={props => (
              <PageWrapper>
                <ShopCategory {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/shop/:category/:category1"
            render={props => (
              <PageWrapper>
                <ShopCategory {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            exact={true}
            path="/shop/:category/:category1/:category2"
            render={props => (
              <PageWrapper>
                <ShopCategory {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route 
            exact={true}
            path="/product/:id"
            render={props => (
              <PageWrapper>
                <SingleProduct {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
                    

          <Route 
            exact={true}
            path="/blogs"
            render={props => (
              <PageWrapper>
                <Blog {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route 
            exact={true}
            path="/blogs/:slug"
            render={props => (
              <PageWrapper>
                <Single {...props} />
                <Footer />
              </PageWrapper>
            )}
          />

          <Route
            exact={true}
            path="/404"
            render={props => (
              <PageWrapper>
                <ErPage {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);