import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import Survey from './pages/Survey'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route path="/survey" component={Survey}/>
        </BrowserRouter>
    )
}