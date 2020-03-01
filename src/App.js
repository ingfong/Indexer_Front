import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Card from 'react-bootstrap/Card'
import axios from "axios"


class App extends Component {
    constructor(props){
        super(props);
        this.state = {query: '', responses: []};
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event, key) {
        this.setState({[key]: event.target.value})
    }
    _getQuery = () => {
        console.log(this.state.query)
        var self = this;
        axios.get("http://127.0.0.1:5000/" + this.state.query).then(function(response){
                                                                    self.setState({responses: response['data'][self.state.query]})
                                                                    console.log(response)
                                                                    })
    }
    createList = () => {
            let list = []
            let i = 0
            
            // Outer loop to create parent
        this.state.responses.map((r) =>{
                //Inner loop to create children
                i++
                                 if (i >= 100){
                                 this.state.responses = []
                                    return;
                                 }
                console.log(r)
                list.push(
                
                              <div>
                                    <Card>
                                        <Card.Body>
                                            <Button variant="link" href= {r} target="_blank">
                                            {r}
                                            </Button>
                                            
                                        </Card.Body>
                                    </Card>
                              </div>);
                                 });
                                 
        
                //Create the parent and add the children
            this.state.responses = []
            return list
    }
        
        
    
render(){

    
    
  return (
          <div>
            <div className = "Rooms-header">
          {
          
//          <img src={ require('./Google.png') } style = {{height: 60}} />
          }
          <h1 className = "Google" style = {{color: 'blue', paddingLeft: 10}}>K</h1>
          <h1 className = "Google" style = {{color: 'red'}}>r</h1>
          <h1 className = "Google" style = {{color: 'orange'}}>i</h1>
          <h1 className = "Google" style = {{color: 'blue'}}>s</h1>
          <h1 className = "Google" style = {{color: 'green'}}>h</h1>
          <h1 className = "Google" style = {{color: 'brown', paddingRight: 10}}></h1>
          
          <input className = "Search" placeholder ="Search" value = {this.state.query}  onChange={event => this.handleChange(event, 'query')}
/>
          <Button onClick={() => {this._getQuery()}} variant = "outline-light"><img src={require('./magnifyingGlass.png')} className= "Magnify" /></Button>
          
            </div>
          
          {this.createList()}
          
          
          </div>
          
          
  );
}
}

export default App;
