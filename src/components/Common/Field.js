import React, {Component} from 'react';

class Field extends Component {
    render(){
        return(
                <div className="form-row">
                    <input
                        className="form-control" 
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        data-validation-required-message="Please enter your name."
                        required="required"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}    
                    />

                    <p className="help-block text-danger">
                        {(this.props.touched && this.props.errors) &&
                            <span>{this.props.errors}</span>
                        }    
                    </p>
                </div>
        )
    }
}

export default Field;