import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                  component={Textarea}
                  name="newPostText"
                  validate={[required, maxLength]}
                  placeholder="Post text"
                />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    );
};

const AddNewPostReactForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = (props) => {
    const postsElements = props.posts.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReactForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
