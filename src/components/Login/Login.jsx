import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/reducers/authReducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component={Input} type="text" placeholder="Login" validate={[required]} />
            </div>
            <div>
                <Field name="password" component={Input} type="password" placeholder="Password" validate={[required]} />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                Remember Me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to="/profile" />;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
