import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'; 
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const handleChange = e => setText(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter a name', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    } 

    return (
        <form onSubmit={handleSubmit} className="form-search uk-margin-large-top">
            <input 
                className="uk-margin-small-right" 
                type="text" 
                name="text" 
                placeholder="Search users ..." 
                value={text}
                onChange={handleChange} 
            />
            <input type="submit" value="Find" className="uk-margin-small-right" />
            { githubContext.users && githubContext.users.length > 0 && <button onClick={githubContext.clearUsers}>Clear</button> }
        </form>
    )
}

export default Search;
