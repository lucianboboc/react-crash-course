import PropTypes from 'prop-types'
import React from 'react';

const Button = ({ text, color, onClick }) => {

    return (
        <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
    );
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button