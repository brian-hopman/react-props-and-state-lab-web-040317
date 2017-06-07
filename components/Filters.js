const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      val: "micropig"
    }
  }

  onChangeHandler(event) {
    this.setState({
      val: event.target.value
    }, this.props.onChangeType(event.target.value)
  )
  }

  findPets(event) {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.val} onChange = {this.onChangeHandler.bind(this)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick = {this.findPets.bind(this)}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
