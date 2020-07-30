import React from 'react';
import loader from '../../../assets/images/loading.gif';

const Preloader = (props) => {
    return (
        <div>
            <img src={loader} />
        </div>
    );
};

export default Preloader;
