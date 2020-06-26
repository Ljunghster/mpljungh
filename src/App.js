import React, { Component } from 'react'
import './App.css'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import pageOne from './pages/pageOne'
import pageTwo from './pages/pageTwo'
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
                    <Link to="/pageTwo" className="navLinks">
                      Page Two
                    </Link>
                  </Button>
                </NavItem>
              </Nav>
            </Navbar>
            <Switch>

              <Route exact path="/">
                <pageOne />
              </Route>
              <Route path="/pageTwo">
                <pageTwo />
              </Route>

            </Switch>
          </div>
        </Router>
      </context.Provider>
    )
  }
}

export default App