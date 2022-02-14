import './App.css';
import React from 'react';
import userimg from './logo.svg'

class App extends React.Component {
constructor(){
  super()
  this.state={
    showprofile : false
  }
}

Setshow = () => this.setState({showprofile : !this.state.showprofile})

render()
{return (
  <div>
  <button onClick={this.Setshow}>+</button> 
  {this.state.showprofile && <Profile/>}
  </div>
)}
} 

export class Profile extends React.Component {
  constructor(){
    super()
    this.state={
      
      Person :{imgsrc: userimg ,fullname:'Jhon berthral' , bio : 'Hy im from the usa' , profession : 'Developper'},
      count : 0,
    } 
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({count : this.state.count+1})
    }, 1000)
    }
    
    componentWillUnmount = () => this.setState({count : this.state.count+1})

  render(){
    return(


      <div>
        <div id="Profile">
        <img src={this.state.Person.imgsrc} alt="Not Found"></img>
        <h3> Name : {this.state.Person.fullname}  </h3>
        <h3>Bio : {this.state.Person.bio} </h3>
        <h3>Profession : {this.state.Person.profession} </h3>
        <h2>{this.state.count}</h2>
      </div>
        
        
      </div>
    )
  }
}

export default App;
