import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { getUser, loading, user, getUserRepos, repos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if(loading) return <Spinner />;

    return <Fragment>
        <div>
            <Link to='/' className="uk-margin-small-right">Back</Link>
            <span>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check uk-text-success"></i>) : (<i className="fas fa-times-circle uk-text-danger"></i>)}
            </span>
        </div>

        <div className="uk-child-width-1-2@m uk-margin-large-top" data-uk-grid>
            <div className="user-img">
                <div className="uk-card-default uk-padding">
                    <img src={avatar_url} className="uk-border-circle" alt={name} style={{width: '150px'}} />
                    <h2>{name}</h2>
                    <p>Location: {location}</p>
                </div>
            </div>
            <div className="user-info">
                {bio && (<Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </Fragment>)}
                <a href={html_url}>Github Profile</a>
                <ul className="uk-list">
                    <li>
                        {login && <Fragment>
                            Username: {login}
                        </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            Company: {company}
                        </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            Website: {blog}
                        </Fragment>}
                    </li>
                </ul>
            </div>
        </div>

        <div className="uk-padding uk-text-center">
            <ul className="uk-list">
                <li className="uk-badge uk-margin-small-right">Followers: {followers}</li>
                <li className="uk-badge uk-margin-small-right">Following: {following}</li>
                <li className="uk-badge uk-margin-small-right">Public Repos: {public_repos}</li>
                <li className="uk-badge">Public Gists: {public_gists}</li>
            </ul>
        </div>

        <Repos repos={repos} />
    </Fragment>
}

export default User;
