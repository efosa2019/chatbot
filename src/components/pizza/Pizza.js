import React, { Component } from 'react'
import './Pizza.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Base from '../base/Base'
import Tomato from '../tomato/Tomato'
import Mushroom from '../mushroom/Mushroom'
import Corn from '../corn/Corn'
import Veggie from '../veggie/Veggie'
import Onions from '../onions/Onions'
import ButtonGroup from '../buttonGroup/ButtonGroup'
import CustomChatbot from '../customChatbot/customChatbot'

class Pizza extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tomato: false,
      mushroom: false,
      veggie: false,
      corn: false,
      onions: false,
    }
  }

  clickEventHandler = (ingredient) => {
    if (ingredient === 'tomato') {
      this.setState({
        tomato: !this.state.tomato,
      })
    } else if (ingredient === 'mushroom') {
      this.setState({
        mushroom: !this.state.mushroom,
      })
    } else if (ingredient === 'corn') {
      this.setState({
        corn: !this.state.corn,
      })
    } else if (ingredient === 'onions') {
      this.setState({
        onions: !this.state.onions,
      })
    } else {
      this.setState({
        veggie: !this.state.veggie,
      })
    }
  }

  render() {
    const tomato = this.state.tomato && <Tomato />
    const mushroom = this.state.mushroom && <Mushroom />
    const corn = this.state.corn && <Corn />
    const veggie = this.state.veggie && <Veggie />
    const onions = this.state.onions && <Onions />

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
              {onions}
            </div>
          </div>
          <ButtonGroup eventHandler={this.clickEventHandler} />
        </div>
        <CustomChatbot eventHandler={this.clickEventHandler} />
      </div>
    )
  }
}

export default Pizza
