import React, { useState, useEffect } from "react";
import Searchbar from './Searchbar';
import FriendList from './FriendList';
import './Socialbar.scss';

function Socialbar() {
    return <div className={"socialbar"}>
        <Searchbar></Searchbar>
        <FriendList></FriendList>
        
    </div>
}

export default Socialbar;