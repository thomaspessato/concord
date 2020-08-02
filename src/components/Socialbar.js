import React, { useState, useEffect } from "react";
import Searchbar from './Searchbar';
import FriendList from './FriendList';

function Socialbar() {
    return <div>
        <Searchbar></Searchbar>
        <FriendList></FriendList>
        
    </div>
}