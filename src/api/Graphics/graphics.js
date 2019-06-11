import React from 'react'
import styled from 'styled-components'

const DrawRect = styled.div`
  display: absolute;
  width: ${props => props.w}px;
  height: ${props => props.h}px;
  background-color: ${props => props.fill};
  opacity: ${props => props.alpha};
  transform: translate(${props => props.x}px, ${props => props.y}px);
`

class Graphics {
  constructor() {
    this.stack = []
    this.fill = '#881111'
    this.alpha = 1
  }

  clear = () => {
    this.stack = []
  }

  beginFill = (color, alpha) => {
    this.fill = color
    this.alpha = alpha
  }

  drawRect = (x, y, w, h) => {
    this.stack.push({
      type: 'rect',
      x,
      y,
      w,
      h,
      fill: this.fill,
      alpha: this.alpha
    })
  }

  endFill = () => {
    console.log('endFill')
    return this.stack.map(item => {
      return this.render(item)
    })
  }

  render = item => {
    const {
      type, x, y, w, h, fill, alpha
    } = item
    switch (type) {
      case 'rect':
        return (
          <DrawRect
            key={Math.random()}
            x={x}
            y={y}
            w={w}
            h={h}
            fill={fill}
            alpha={alpha}
          />
        )
      default:
        return <div />
    }
  }
}

export default new Graphics()
