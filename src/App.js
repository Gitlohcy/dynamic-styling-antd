import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Buttons from '@/modules/Buttons'
import Radios from '@/modules/Radios'
import Atoms from '@/modules/Atoms'

export class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Atoms}/>
                <Route path="/buttons" component={Buttons}/>
                <Route path="/radios" component={Radios}/>
                <Route path="/atoms" component={Atoms}/>
            </div>
        )
    }
}

export default App
