import React from 'react'
import PropTypes from 'prop-types'

import {dados} from './data'



export default function Icons({name, size, color}){

    return(
        <span style={{width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${dados[name]}) `,
        backgroundSize: 'cover',
        }}></span>
    )
}