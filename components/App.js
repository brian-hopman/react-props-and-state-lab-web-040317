import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [  {
          "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
          "type": "dog",
          "gender": "male",
          "age": 4,
          "weight": 1,
          "name": "Trident"
        }],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };


    this.changesFilter = this.changesFilter.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.passesId = this.passesId.bind(this)
  }

  changesFilter(arg) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: arg})
    })
  }

  onFindPetsClick() {
    let arg = this.state.filters.type
    let apiVal = {
      'all': '/api/pets',
      'dog': '/api/pets?type=dog',
      'cat': '/api/pets?type=cat',
      'micropig': '/api/pets?type=micropig'
    }

    // fetch(apiVal[arg]).then(res => res.json())
    // .then(json => console.log(json));

    // this.setState({
    //   pets: fetch(apiVal[arg]).then(res => res.json())[]
    // }, console.log(this.state.pets))
    fetch(apiVal[arg]).then(res => res.json()).then((value)=>{
      // console.log(this)
      this.setState({
        pets: value
      })
    })

  }


  passesId(id) {

    this.setState((previousState) => {
      console.log(previousState)
      return {adoptedPets: [...previousState.adoptedPets, id]}
    })

  //   this.setState({
  //     adoptedPets: Object.assign([], this.state.adoptedPets, {id})
  //   }, console.log(this.state.adoptedPets)
  // )
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.changesFilter} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = {this.passesId} pets = {this.state.pets} adoptedPets = {this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
