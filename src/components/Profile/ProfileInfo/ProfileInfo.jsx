import React from 'react';
import cn from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="header" />
            </div>
            <div className={cn.descriptionBlock}>
                ava + description
                {/* <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt="avatar" /> */}
            </div>
        </div>
    );
};

export default ProfileInfo;
