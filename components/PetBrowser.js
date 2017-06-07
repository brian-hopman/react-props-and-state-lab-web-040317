const React = require('react');

const Pet = require('./Pet');



class PetBrowser extends React.Component {


  petCyle() {
    return this.props.pets.map(function(pet) {
      return (<Pet pet = {pet} isAdopted = {this.props.adoptedPets.includes(pet.id) ? true : false} onAdoptPet = {this.props.onAdoptPet} />)
    }, this)
  }

  render() {
    return (
      <div className="ui cards">
        {this.petCyle()}
      </div>
    );
  }

  petAdopted() {
    return
  }
}

module.exports = PetBrowser;
