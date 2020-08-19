import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import Survey from './pages/Survey'
import Statement from './pages/Statement'
import Success from './pages/Success'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route path="/enunciado" component={Statement}/>
            <Route path="/questionário" component={Survey}/>
            <Route path="/sucesso" component={Success}/>
        </BrowserRouter>
    )
}