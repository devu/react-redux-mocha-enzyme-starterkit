import React, { PureComponent } from 'react'
import {
  Stage, Container, Sprite, TextField
} from 'api/ReactDisplayList'
import { graphics } from 'api/Graphics'

class ReactDisplayList extends PureComponent {
  renderSprite = () => {
    const size = Math.random() * 200
    const size1 = Math.random() * 100
    const size2 = Math.random() * 50
    const size3 = Math.random() * 100
    return (
      <Sprite x={Math.random() * 800} y={Math.random() * 400} w={size} h={size}>
        {graphics.clear()}
        {graphics.beginFill('#ff4411', 0.5)}
        {graphics.drawRect(0, 0, size, size)}
        {graphics.beginFill('#f2e419', 0.5)}
        {graphics.drawRect(0, 0, size3, size3)}
        {graphics.beginFill('#122419', 0.5)}
        {graphics.drawRect(0, 0, size2, size2)}
        {graphics.beginFill('#67e959', 0.5)}
        {graphics.drawRect(0, 0, size1, size1)}
        {graphics.beginFill('#672919', 0.5)}
        {graphics.drawRect(0, 0, size1, size1)}
        {graphics.endFill()}
      </Sprite>
    )
  }

  renderSprites = () => {
    const elements = []
    for (let i = 0; i < 100; i++) {
      elements.push(this.renderSprite())
    }
    return elements
  }

  // This is to prove how much you must hate your browser and CPU
  // to use react and styled to perform such a simple task
  // as dynamic generation of 1000 divs
  render() {
    return (
      <Stage bg="#333">
        <Container x={100} y={100}>
          {this.renderSprites()}
          <TextField x={50} y={0}>
            Title
          </TextField>
          <TextField x={70} y={22}>
            Some text goes here
          </TextField>
        </Container>
        <Container x={300} y={150}>
          {this.renderSprites()}
          <TextField x={50} y={0}>
            Title
          </TextField>
          <TextField x={70} y={22} w={300}>
            Some text goes here
          </TextField>
        </Container>
      </Stage>
    )
  }
}

export default ReactDisplayList
