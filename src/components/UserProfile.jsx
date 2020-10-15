import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = props =>{
    const { users } = props
    const { userName } = useParams();
    const user = users.find(user => {
        return user.login === userName ? user : null;
    });
    
    return(
        <div>
            <div>
                <h1>{user.name}</h1>
            </div>
            <div>
            <img src={user.avatar_url} alt={`${user.name}`}/>
            </div>
        </div>

        )
}

export default UserProfile;