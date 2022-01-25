import React from 'react'
import ReactDOM from 'react-dom'

import Icons from '../lib/icons'

const App = () =>{
    return(
        <>
            <Icons name="bookmark-outline" size={24} color="#000"/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))