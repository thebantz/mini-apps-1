import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Convert your JSON to CSV:
        <form>
          <input type="text" name="jsondata" required size="20" />
          <button>Convert</button>
        </form>
      </div>
    );
  }
}


export default App;