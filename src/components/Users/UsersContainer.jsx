import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers  } from '../../redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => this.props.getUsers(pageNumber, this.props.pageSize);

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress} />
            </>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer));
