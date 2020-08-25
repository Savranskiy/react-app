import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
