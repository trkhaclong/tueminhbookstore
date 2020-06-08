import React, {Component} from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Field from '../Common/Field';
import {connect} from 'react-redux';
import * as AuthActions from '../../store/actions/authActions';
import {Link} from 'react-router-dom';


const fields= [
    {name: 'email',type: 'email', placeholder: 'Email address'},
    {name: 'password',type: 'password', placeholder: 'Password'}
]

class Login extends Component {
    render(){
        return(
            <div className="login-account section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <form onSubmit={e => {
                                e.preventDefault();
                                this.props.login(this.props.values.email, this.props.values.password);
                            }} className="create-account-form" style={{display: 'block'}}>
                                    <h2 className="heading-title">
                                        ĐĂNG NHẬP
                                    </h2>
                                    {fields.map((f, i) => {
                                        return (
                                            <div key={i}  className="col-md-12">
                                            <Field   
                                                    {...f}
                                                    value={this.props.values[f.name]}
                                                    name={f.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={(this.props.touched[f.name])}
                                                    errors={this.props.errors[f.name]}
                                                />
                                            </div>
                                        )
                                    })}
                                    <p className="lost-password form-group">
                                        <a alt="" rel="nofollow">Quên mật khẩu?</a>
                                    </p> 
                                    <div className="col-md-12">					
                                        <button className="btn-login" name="submitcreate" id="submitcreate" type="submit" style={{float:'left', marginBottom: '15px'}}>
                                            <span>
                                                <i className="fa fa-user left"></i>
                                                đăng nhập
                                            </span>
                                        </button>
                                        <Link to="/signup" style={{float: 'right'}}>
                                        <button className="btn-login">
                                            <span>
                                                <i className="fa fa-user left"></i>
                                                đăng kí
                                            </span>
                                        </button>
                                        </Link>
                                    </div>                          
                            </form>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <form action="#" className="create-account-form" method="post" style={{display: 'block'}}>
                                    <h2 className="heading-title">
                                        Đăng nhập với
                                    </h2>
                                    <div className="col-md-12 submit">					
                                        <button name="submitcreate" id="submitcreate" type="submit" className="btn-login">
                                            <span>
                                                <i className="fa fa-user left"></i>
                                                Log in with facebook
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col-md-12 submit" >					
                                        <button style={{background: '#ffffff'}} name="submitcreate" id="submitcreate" type="submit" className="btn-login">
                                            <span>
                                                <i className="fa fa-user left"></i>
                                                Log in with Google
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col-md-12 submit" >					
                                        <button style={{background: '#ffffff',paddingBottom: '30px'}} name="submitcreate" id="submitcreate" type="submit" className="btn-login">
                                            <span>
                                                <i className="fa fa-user left"></i>
                                                Log in with Zalo
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>               
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, pass) => {
            dispatch(AuthActions.login(email, pass));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is invalid.').required('Login with email.'),
        password: Yup.string().required('Enter Password')
     }),

    handleSubmit: (values, {setSubmitting}, login) => {
        console.log("Login attempt", values);
        login(values.email, values.password);
    }
})(Login));