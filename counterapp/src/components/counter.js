
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import "./counter.css"

class CounterApp extends Component{

    constructor() {
        super();
        this.state = {
            ctr : 0
        }

       // this.increment = this.increment.bind(this)

    }

render(){
        return(

            <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>

            <span className="spnctr">{this.state.ctr}</span>

            </div>
        )
        
    }

    increment = () => {
      // this.state.counter++;  //Bad Practice.

      this.setState(

            {
                ctr: this.state.ctr + this.props.by

            }

      );
      
    }
}


CounterApp.defaultProps = {

    by:1

}

CounterApp.propTypes= {
    by : PropTypes.number

}


export default CounterApp