import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} type="text" placeholder="Login" validate={[required]} />
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

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
