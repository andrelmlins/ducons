import React from 'react'
import PropTypes from 'prop-types'

import {dados} from './data'



export default function Icons({name, size, color}){

    return(
        <img src={dados[name]} style={{width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}></img>
    )
}