class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter Checkout Details:</h3>
        <FormOne />
      </div>
    )
  }
}


class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          E-mail:
          <input name="email" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input name="password" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Next" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));