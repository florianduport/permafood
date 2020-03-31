import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from './components/Test';
import Navbar from './components/template/Navbar';
import Footer from './components/template/Footer';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

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
          </div>
        </main>

        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
