import React from 'react';

const Button = ({clickValue, clickAction}) => {
    return (
        <button
            style={{width: 100, height: 100}}
            onClick={() => clickAction(clickValue)}>
            +{clickValue}
        </button>
    );
};

export default Button