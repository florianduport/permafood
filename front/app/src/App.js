import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/template/Navbar';
import Footer from './components/template/Footer';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Family from './components/pages/Family';
import Garden from './components/pages/Garden';
import SeeData from './components/pages/SeeData';

class App extends React.Component {
  state = {
    example : [ ]
  }

  render() {
    return (
      <BrowserRouter>
        <header><Navbar/></header>
        <main>
          <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
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

export default App;
