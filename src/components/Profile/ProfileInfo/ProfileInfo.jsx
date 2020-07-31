import React from 'react';
import cn from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="header" />
            </div>
            <div className={cn.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <br/>
                {props.profile.aboutMe}
                {/* <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt="avatar" /> */}
            </div>
        </div>
    );
};

export default ProfileInfo;
