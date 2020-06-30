import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import '../src/components/assets/loader';
import './components/assets/css/page.css';
import loadable from '@loadable/component';

import PageWrapper from './components/PageWrapper';

import Footer from './components/Common/Footer';

const Authors = loadable(() => import ('./components/Pages/Authors'))

const ErPage = loadable(() => import('./components/Pages/ErPage'))

const Home = loadable(() => import('./components/Pages/Home'))
const Shop = loadable(() => import('./components/Pages/Shop'))
const SingleProduct = loadable(() => import ('./components/Pages/SingleProduct'))

const SignUp = loadable(() => import('./components/Pages/SignUp'))
const Login = loadable(() => import('./components/Pages/Login'))

//Admin Pages
const Dashboard = loadable(() => import('./components/Pages/Admin/DashBoard'))
const Users = loadable(() => import ('./components/Pages/Admin/Users'))
const Products = loadable(() => import('./components/Pages/Admin/Products'))
const AddProduct = loadable(() => import ('./components/Pages/Admin/AddProduct'))
const Receipts = loadable(() => import('./components/Pages/Admin/Receipts'))


const AdminWrapper = loadable(() => import('./components/AdminWrapper'))
const LoginWrapper = loadable (() => import('./components/LoginWrapper'))

const ShopCategory = loadable(() => import('./components/Pages/ShopCategory'))








class App extends Component {


  render(){
    return (
        <Router>
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
            path="/author"
            render={props => (
              <PageWrapper>
                <Authors />
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