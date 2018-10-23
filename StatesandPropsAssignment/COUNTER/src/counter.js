import React from 'react';

class Counter extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            counterVal: 0,
        };
        console.log("Counter props : "+this.state.counterVal);
    }

    componentWillReceiveProps(updatedProps) {
        console.log('---------', updatedProps);

        const { counterVal } = this.state;
        if(updatedProps.value === 'inc') {
            this.setState({ counterVal: counterVal + 1 });
        } else if (updatedProps.value === 'dec') {
            this.setState({ counterVal: counterVal - 1 });
        }
    }

    inc = () => {
        const val = this.state.counterVal;
        this.setState({counterVal: val+1});
    };

    dec = () => {
        const val = this.state.counterVal;
        this.setState({counterVal: val-1});
    };

    render(){
        return(
            <div>
                <input type='button'  value="+" onClick={this.inc} />&nbsp;&nbsp;&nbsp;
                <input type='button'  value="-" onClick={this.dec} />&nbsp;&nbsp;&nbsp;
                <span> {this.state.counterVal} </span>
                <br/><br/>
            </div>
        )
    }
}

export const ChangeAll = (props) =>{
    return (
        <div>
            <label>Increment All</label>&nbsp;&nbsp;
            <input type='button'  value="+"  onClick={props.incrementAll}/>&nbsp;&nbsp;&nbsp;

            <label>Decrement All</label>&nbsp;&nbsp;
            <input type='button'  value="-" onClick={props.decrementAll}/>&nbsp;&nbsp;&nbsp;

        </div>
    )
}

export default Counter;


/*const Counter  = (props) =>{
    return(
        <div>
            <input type='button'  value="+" />&nbsp;&nbsp;&nbsp;
            <input type='button'  value="-" />&nbsp;&nbsp;&nbsp;
            <span> {props.value} </span>
            <br/><br/>
        </div>

    )
}*/
/*export class ChangeAll extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <div>
                <label>Increment All</label>&nbsp;&nbsp;
                <input type='button'  value="+" />&nbsp;&nbsp;&nbsp;

                <label>Decrement All</label>&nbsp;&nbsp;
                <input type='button'  value="-" />&nbsp;&nbsp;&nbsp;

            </div>
        )
    }
}*/