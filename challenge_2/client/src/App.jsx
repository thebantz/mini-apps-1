import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsondata: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('Wait for JSON Data to Convert');
    event.preventDefault();
  }

  render() {
    return (
      <div>Convert your JSON to CSV:
        <form action="/rhino" method="post">
          {/* <input type="text" name="jsondata" required size="20" /> */}
          <textarea name="jsondata"></textarea>
          <input type="submit" />
        </form>
      </div>
    );
  }

  convertFile() {

  }
}


export default App;