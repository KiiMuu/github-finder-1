import React, { Fragment } from 'react';
import spinner from './Spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="loading" style={{width: '300px', margin: 'auto', display: 'block'}} />
        </Fragment>
    )
}

export default Spinner;
