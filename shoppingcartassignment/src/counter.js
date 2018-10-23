import React from 'react';

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value : 0
        }
    }

    increamentCounter = () =>
    {
        this.setState({ value: this.state.value+1});
    }
    decreamentCounter = () =>
    {
        this.setState({ value: this.state.value-1});
    }

    render()
    {
        return (
            <div>
                <span>Counter:&nbsp; {this.props.counterNo}&nbsp;&nbsp;</span>
                <input type='button' onClick={this.increamentCounter} value="+" />&nbsp;&nbsp;&nbsp;
                <input type='button' onClick={this.decreamentCounter} value="-" />&nbsp;&nbsp;&nbsp;
                <span>{this.state.value}</span>
                <br/><br/>
            </div>
        )
    }
}


export class ChangeAll extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <div>
                <label>Increment All</label>
                <input type='button'  value="+" />&nbsp;&nbsp;&nbsp;

                <label>Decrement All</label>
                <input type='button'  value="-" />&nbsp;&nbsp;&nbsp;

            </div>
        )
    }
}


//export default Counter;