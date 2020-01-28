import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <div className="uk-margin">
                <p>{alert && alert.msg}</p>
            </div>
        )
    )
}

export default Alert;
