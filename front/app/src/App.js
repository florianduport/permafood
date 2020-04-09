import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './components/template/Navbar';
import Footer from './components/template/Footer';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Dashboard from './components/pages/Dashboard';
import Family from './components/pages/Family';
import Garden from './components/pages/Garden';
import SeeData from './components/pages/SeeData';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <header><Navbar/></header>
        <main>
          <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/dashboard">
              {(!this.props.isConnected ? <Redirect to="/login" /> : <Dashboard />)}
            </Route>
            <Route exact path="/family">
              {(!this.props.isConnected ? <Redirect to="/login" /> : <Family />)}
            </Route>
            <Route exact path="/garden">
              {(!this.props.isConnected ? <Redirect to="/login" /> : <Garden />)}
            </Route>
            <Route exact path="/seedata">
              {(!this.props.isConnected ? <Redirect to="/login" /> : <SeeData />)}
            </Route> 
          </div>
        </main>

        <Footer/>
      </BrowserRouter>
    );
  }
}

const mapStateToProps= (state) => {

  return state.userReducer
}

export default connect(mapStateToProps)(App);
