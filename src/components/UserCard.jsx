import React from 'react';

const UserCard = props => {
    return(
        <div>
            
            <div>
                <img src={props.avatar_url} alt={`${props.name}`}/>
                <p>
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default UserCard;
