import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div className="uk-container uk-margin-medium-top">
                <div className="uk-grid-small" data-uk-grid>
                    {users && users.map(user => (
                        <UserItem key={user.id} user={user} /> 
                    ))}
                </div>
            </div>
        )   
    }
}

export default Users;
