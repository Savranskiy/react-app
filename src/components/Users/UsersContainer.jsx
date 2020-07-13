import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/reducers/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
