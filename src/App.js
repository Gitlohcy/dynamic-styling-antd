import React, { Component , useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Buttons from '@/modules/Buttons'
import Radios from '@/modules/Radios'
// import Atoms2 from '@/modules/Atoms2'


const Atoms2 = (props) => {
    return (<DynamicRouting load = {() => import('./modules/Atoms2') }>
        {
            (Component) => Component === null ? <Loading /> : <Component {...props}/>
        }
    </DynamicRouting>
    )
}

export const Loading = () => {
    return <div> Loading</div>
}



class DynamicRouting extends Component {
    state = {
        component : null
    }
    
    

    componentDidMount(){
        this.props.load()
            .then( (component) => {
                    this.setState( () => ({
                        component : component.default ? component.default : component
                    }))
                
            })
        
    }

    render(){
        return this.props.children(this.state.component) 
    }
}

const DynamicRouting2 = ({url}) => {
    const [count, setCount] = useState
    const [this_url, setUrl] = useState('')
    const [this_component, setComponent] = useState(null)
    
    setUrl(url)
    useEffect(() => {
        function load(){
            import(this_url)
        }

        setCount(count++);
        console.log(count);

        // if(this_url !== '')
            load()
                .then(component => {
                    setComponent(
                        component.default ? component.default : component   //es module default export or common js
                    )
                })
        
            

    }, [this_url])

    return this.props.childComponent(this_component)
}

export class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Atoms2}/>
                <Route path="/buttons" component={Buttons}/>
                <Route path="/radios" component={Radios}/>
                <Route path="/atoms" component={Atoms2}/>
            </Switch>
        )
    }
}

export default App
