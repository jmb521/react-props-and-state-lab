import React from 'react'

class Pet extends React.Component {

  handleOnClick = (id) => {
    console.log("props in pet", this.props)
    this.props.onAdoptPet(id)
  }
  render() {
    const {id, name, type, age, gender, weight, isAdopted} = this.props.pet
    return (
      <div className="card" id={id}>
        <div className="content">
          <a className="header" href="
          ">
            {/*'♀' OR '♂' */}
            {name}
            {gender === "male" ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() => this.handleOnClick(id)}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
