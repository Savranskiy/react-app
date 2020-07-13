import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => dispatch(addPostActionCreator())
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
