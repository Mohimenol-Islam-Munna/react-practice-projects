import React from 'react'
import PropsTypes from 'prop-types'

import Button from './Button'

const Header = (props) =>{

    const clickHandler = () =>{

        console.log("This is clickHandler function");
    }


    return (
        <header className='header'>
            <h1>{ props.title }</h1>
            <Button color="green" text="Add New" onClick={ clickHandler }/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
 }

Header.propsTypes = {
    name: PropsTypes.string,
  } 

export default  Header
