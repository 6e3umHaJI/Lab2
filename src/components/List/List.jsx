import React from 'react';
import s from "./List.module.css";
import Search from "./Search/Search";
import scammersInfo from "../../data/scammersInfo.js";

const List = (props) => {
    return (
        <div className={s.wrapper}>
            <Search details={scammersInfo}/>
        </div>
    );
};

export default List;