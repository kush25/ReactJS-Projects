
import React,{Component} from 'react'
import "./counter.css"

class CounterApp extends Component{

    constructor() {
        super();
        this.state = {
            ctr : 0
        }

        this.increment = this.increment.bind(this)

    }

render(){
        return(

            <div className="counter">
            <button onClick={this.increment}>+1</button>

            <span className="spnctr">{this.state.ctr}</span>

            </div>
        )
        
    }

    increment(){
      // this.state.counter++;  //Bad Practice.

      this.setState(

            {
                ctr: this.state.ctr+1

            }

      );
      
    }
}



export default CounterApp