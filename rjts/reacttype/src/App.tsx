import React, { Component } from 'react';

interface GreetingProps {
  name: string; 
}

// Composant fonctionnel Greeting
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

interface CounterState {
  count: number;
}

// Composant de classe Counter
class Counter extends Component<{}, CounterState> {
  
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Composant principal App
function App() {
  return (
    <div>
      {/* Utiliser le composant Greeting */}
      <Greeting name="Nabil za3im" />
      {/* Utiliser le composant Counter */}
      <Counter />
    </div>
  );
}

export default App;
