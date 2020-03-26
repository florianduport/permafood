import React from 'react';
import Test from './components/Test';

class App extends React.Component {
  state = {
    texts : [ {id: 1, info : "toto"}, {id: 2, info: "titi"} ]
  }

  logSomething = () => {
    console.log('ok');
  }

  render() {
    return (
      <div className="App">
          <h1>app</h1>
          <Test logSomething={this.logSomething} texts={this.state.texts}/>
      </div>
    );
  }
}

export default App;
