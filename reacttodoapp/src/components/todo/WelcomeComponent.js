
import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component{

    render(){
        return(
            <div> 
                <h1>Welcome {this.props.match.params.name} To React Success Login Page.</h1>
                <p>Manage your Todos <Link to="/todo"> here</Link></p> 
                
                </div>
        )

    }
}

export default WelcomeComponent;