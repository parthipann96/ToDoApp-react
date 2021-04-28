import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from 'react-router-dom'
import "./index.css";
import TodoList from "./TodoList/TodoList";
import Home from "./Home/Home";
import About from "./About/About";


class Menu extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <div className='menu'>
                        <span className='menuItem'><Link to="/">Home</Link></span>
                        <span className='menuItem'><Link to="/todolist">TodoList</Link></span>
                        <span className='menuItem'><Link to="/about">About</Link></span>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/todolist" component={TodoList} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        )
    }
}
  
var destination = document.querySelector("#container");
  
ReactDOM.render(<Menu />,destination);