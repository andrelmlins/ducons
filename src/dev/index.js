import React from 'react'
import ReactDOM from 'react-dom'

import Icons from '../lib/icons'

const App = () =>{
    return(
        <>
            <Icons name="bookmark" size={100} color="#0f0"/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))