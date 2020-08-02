import React, { useState, useEffect } from 'react';

function FriendList() {
    const [friends, useFriends] = useState([
        {
            name: "Fernando Frich."
        },
        {
            name: "Rodrigo"
        }
    ]);
    return <div>
        <span>DIRECT MESSAGES</span>
        <ul>
            {friends.map((friend) => {
                return <li>
                    <span>{friend.name}</span>
                </li>
            })}
        </ul>
    </div>
}

export default FriendList;