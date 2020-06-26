import React, { Component } from 'react'
import './App.css'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import context from './utils/context'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap'

class App extends Component {



  render() {
    return (
      <context.Provider value={this.state}>
        <Router>
          <div>
            <Navbar color="light">
              <NavbarBrand>
                <Link to="/" className="navBrand">
                  My App
                </Link>
              </NavbarBrand>
              <Nav>
                <NavItem>
                  <Button color="info">
                    <Link to="/" className="navLinks">
                      Page One
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button color="info">
                    <Link to="/pagetwo" className="navLinks">
                      Page Two
                    </Link>
                  </Button>
                </NavItem>
              </Nav>
            </Navbar>
            <Switch>

              <Route exact path="/">
                <PageOne />
              </Route>
              <Route path="/pagetwo">
                <PageTwo />
              </Route>

            </Switch>
          </div>
        </Router>
      </context.Provider>
    )
  }
}

export default App