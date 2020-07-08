import React from 'react';
import cn from './Post.module.css';

const MyPosts = (props) => {
    return (
        <div className={cn.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy64CxsxG5s2Yi6Z4bun4eJoNAFiDdP4bpuaFaryrTeXZJXChJ&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default MyPosts;
