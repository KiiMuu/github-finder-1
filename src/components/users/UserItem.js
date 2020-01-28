import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: { login, avatar_url, html_url }}) => {
    return (
        <div className="uk-width-1-3@m">
            <div className="uk-card-default uk-padding">
                <img 
                    src={avatar_url} 
                    className="uk-border-circle" 
                    width="88" 
                    height="88" 
                    alt={login}
                />
                <h3 
                    style={{marginTop: '10px', marginBottom: '15px'}}
                >{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="uk-button uk-button-secondary">More</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
