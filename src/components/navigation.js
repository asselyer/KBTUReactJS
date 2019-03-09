
class App extends Component {
    render() {
      return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
          </header>
        </div>
      );
    }
  }
  
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