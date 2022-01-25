import React from 'react'
import PropTypes from 'prop-types'

import google_play from './icons/google_play.svg'






export default function Icons({name, size, color}){

    const dados = {
        "google_play": google_play,
    }

    return(
        <img src={dados[name]} style={{width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}></img>
    )
}