import React from 'react';

class Test extends React.Component {
  constructor(props) {
   super(props);
   this.logSomething = this.props.logSomething;
  }
  render() {
    const texts = this.props.texts
    const data = texts.map(text => {
      return(
        <div className="Test" key={text.id}>
          <h1 onClick={() => {this.props.logSomething();}}>{text.info}</h1>
        </div>
      )
    })
    return (
      <div>{data}</div>
    );
  }
}

export default Test;
