import React from 'react';
import UserCard from './UserCard'

const UserCardList = props => {
    const { users } = props;
    return(
        <>
            {users.map(user =>(
                <UserCard {...user} />
            )
            )}
        </>
    )
}

export default UserCardList;