import React from 'react';
import Post from './Post/Post';
import cn from './MyPosts.module.css';

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    const onChangePost = () => {
        const text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };

    return (
        <div className={cn.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={cn.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
