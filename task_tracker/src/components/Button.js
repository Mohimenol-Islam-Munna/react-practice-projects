import React from 'react'

import PropsTypes from 'prop-types'

const Button = (props) => {

    const { color, text, onClick } = props;

    return (
        <div>
            <button className='btn' style={ {backgroundColor: color}} onClick= { onClick } >{ text }</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'salmon',
    text: 'Button'
}

Button.propsTypes = {

    onClick: PropsTypes.func,

}

export default Button
