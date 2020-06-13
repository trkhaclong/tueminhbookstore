import React, {Component} from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Field from '../Common/Field';
import {connect} from 'react-redux';
import * as AuthActions from '../../store/actions/authActions';


const fields= [
    {name: 'email',type: 'email', placeholder: 'Địa chỉ email'},
    {name: 'name',type: 'text', placeholder: 'Tên'},
    {name: 'password',type: 'password', placeholder: 'Mật khẩu'},
    {name: 'password2',type: 'password', placeholder: 'Xác minh mật khẩu'}
]

class SignUp extends Component {
    render(){
        return(
            <div className="login-account section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-11">
                            <form onSubmit={e => {
                                e.preventDefault();
                                this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
                            }} className="create-account-form" style={{display: 'block', minHeight: '500px'}}>
                                    <h2 className="heading-title">
                                        ĐĂNG KÍ
                                    </h2>
                                    {fields.map((f, i) => {
                                        return (
                                            <div 
                                            key={i}  className="col-md-12">
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
                                    <div className="col-md-12">
                                        <p className="text-danger text-center">{this.props.auth.error || ""}</p>			
                                        <button className="btn-login" style={{marginRight:'18px'}}>
                                            <span>
                                                <i className="fa fa-user left"></i>
                                                Đăng kí
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
        register: (name, email, pass) => {
            dispatch(AuthActions.register(name, email, pass));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        password2: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name??'),
        email: Yup.string().email('Email is invalid.').required('Login with email.'),
        password: Yup.string().min(8, 'Dai` hon ti duoc khong?').required('Enter Password'),
        password2: Yup.string().required('Password again').test('pass-match', 'Passwords don\t match', function(value){
            const {password} = this.parent;
            return password === value;
        })
     }),

    handleSubmit: (values, {setSubmitting}, login) => {
        console.log("Login attempt", values);
        login(values.email, values.password);
    }
})(SignUp));