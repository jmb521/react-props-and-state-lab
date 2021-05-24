import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleClick = () => {
    let url; 
    if (this.state.filters.type === "all") {
      url= `/api/pets`
    } else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pets: response
      })
    })
    
  }

  onAdoptPet = (id) => {
    const foundPet = this.state.pets.map(pet => {
      if(pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    // foundPet.isAdopted: true;
    
    this.setState({
      
      pets: foundPet

    })
  }

  handleOnChangeType = (type) => {
    this.setState({
      ...this.state.filters, 
      filters: {
        type: type
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
