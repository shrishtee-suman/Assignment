import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {Navigation} from "./navigation";
import {Home} from "./home";
import {About} from "./about";
import Contact from "./contact";
import {Users} from "./users";

class App extends Component {
    state = {
        data: []
    };

    addData = (content) => {
        this.setState({
            data: [...this.state.data, content],
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact us" render={()=> <Contact addDataHandler = {this.addData} data={this.state.data} />}/>
                    <Route path="/users" render={()=> <Users data={this.state.data}/>} />
                </div>
            </Router>


        );
    }
}

export default App;
