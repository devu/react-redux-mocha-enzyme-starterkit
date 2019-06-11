import React, { PureComponent } from 'react'
import DzonyChild from './DzonyChild'

import './DzonyComponent.scss'

class DzonyComponent extends PureComponent {
  constructor() {
    super()
    this.state = {
      wiem: false,
      text: 'costam'
    }
  }

  handleWiedza = () => {
    const { wiem } = this.state
    this.setState({ wiem: !wiem })
  }

  render() {
    const { wiem, text } = this.state
    const myClass = wiem ? 'wiem' : 'niewiem'
    const mojText = `${text} ${myClass}`
    return (
      <div className={myClass}>
        {mojText}
        <DzonyChild onClick={this.handleWiedza} />
      </div>
    )
  }
}

export default DzonyComponent
