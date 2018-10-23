import React from 'react';
import Counter from "./counter";
import {ChangeAll} from "./counter"

class MainCounter extends  React.Component{

    constructor(){
        super();

        this.state = {
            value:'',
        }
    }

    incrementAll = () =>
    {
         this.setState({ value: 'inc'});
    }
    decrementAll = () =>
    {
        this.setState({ value: 'dec'});
    }
     render(){
        return(
            <div>
                <h2>Counter 1:</h2>
                <Counter value={this.state.value} />
                <h2>Counter 2:</h2>
                <Counter value={this.state.value} />
                <h2>Counter 3:</h2>
                <Counter value={this.state.value} />
                <ChangeAll incrementAll={this.incrementAll} decrementAll={this.decrementAll}/>
            </div>
        )

    }

}

export default MainCounter;