import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./Login";
import {TodoApp} from "./TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export class App extends Component {


     constructor(props) {
            super(props);
            this.state = {items: [], text: '', priority: 0, dueDate: moment()};

        }


  render() {


  const LoginView = () => (
          <Login/>
      );

    const TodoAppView = () => (
          <TodoApp/>
      );
      const bool = localStorage.getItem('isLoggedIn');
      const isLoggedIn = bool;



        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                    {isLoggedIn === 'true' ? <div><li><Link to="/">Login</Link></li>
                                 <li><Link to="/todo">Todo</Link></li></div> :
                                 <li><Link to="/">Login</Link></li>}
                     </ul>

                    <div>
                    <Route path="/todo" component={TodoAppView}/>
                    <Route exact path="/" component={LoginView}/>




                    </div>
                </div>
            </Router>
        );
    }

}

export default App;