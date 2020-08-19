import React from 'react';

const Button = ({clickValue, clickAction}) => {
    return (
        (clickValue === 0 ?
                <button
                    style={{width: 100, height: 100}}
                    onClick={() => clickAction(clickValue)}>
                    Reset
                </button> :
                <button
                    style={{width: 100, height: 100}}
                    onClick={() => clickAction(clickValue)}>
                    +{clickValue}
                </button>
        )
    )
};

export default Button