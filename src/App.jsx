import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Header2} from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userList: [],
      date: new Date()
    };
  }

  componentDidMount(){
    this.getUsers();
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }
  // function(date){
  //   return this.tick();
  // }
  getUsers = () => {
    console.log('INITIAL STATE VALUES');
    console.log(this.state.userList);

    axios
    .get('https://reqres.in/api/users?page=1')
    .then(res => {

      let user = res.data.data;

      this.setState({userList: user});

      console.log('UPDATED STATE VALUE');
      console.log(this.state.userList);

    });

  }

  tick(){

    console.log('CALLED TICK METHOD');
    
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">

      {/* <Header  date = {this.state.date.toLocaleTimeString()}/>  */}
      <Header />

      <Main />

      <Footer />

      </div>
    );
  }
}

export default App;
