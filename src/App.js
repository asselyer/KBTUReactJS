import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages'
import Contact from './components/Contact';
import About from './components/About';
import Order from './components/Order';


class NavLink extends Component {

  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link 
                    className="nav-link" 
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                  >
              {this.props.text}</Link>
        </li>
      );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={Order}/>
      <Route exact path='/2' component={About} />
      <Route exact path='/3' component={Contact} />
    </Switch>
  </main>
)

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/1", text: "Заказ браслетов", isActive: false},
        {path: "/2", text: "О нас", isActive: false},
        {path: "/3", text: "Контакты", isActive: false},
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice(); 
     for (const j in links) {
      links[j].isActive = i == j ;
    }
    this.setState({links: links});
  }
  render() {
    return (
      <div>
<nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">Главная</Link>
          <ul className="navbar-nav">
            {this.state.links.map((link, i) => 
              <NavLink 
                path={link.path} 
                text={link.text} 
                isActive={link.isActive}
                key={link.path} 
                onClick={() => this.handleClick(i)}
              /> 
            )}
          </ul>
        </nav>
      </div>
      
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;