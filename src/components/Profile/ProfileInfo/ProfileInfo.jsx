import React from 'react';
import cn from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            {/* <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="header" />
            </div> */}
            <div className={cn.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <br/>
                {props.profile.aboutMe}
                <ProfileStatus status={'hello'} />
            </div>
        </div>
    );
};

export default ProfileInfo;
