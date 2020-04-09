import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './components/template/Navbar';
import Footer from './components/template/Footer';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
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
            <Route exact path="/dashboard">
              {(!this.props.userReducer.isConnected ? <Redirect to="/login" /> : <Dashboard />)}
            </Route>
            <Route exact path="/family" component={Family} />
            <Route exact path="/garden" component={Garden} />
            <Route exact path="/seedata" component={SeeData} />
          </div>
        </main>

        <Footer/>
      </BrowserRouter>
    );
  }
}

const mapStateToProps= (state) => {

  return state
}

export default connect(mapStateToProps)(App);
