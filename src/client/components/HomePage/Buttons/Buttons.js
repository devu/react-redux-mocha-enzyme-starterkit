import React, { Fragment } from 'react'

import {
  Button,
  RadioCheckGroup,
  Icon
} from '@pearson-components/elements-sdk/build/dist.elements-sdk'

const Buttons = () => (
  <Fragment>
    <h1>Buttons</h1>
    <Button> Default </Button>
    <Button btnType="primary">Primary</Button>
    <Button btnType="cta">Call to Action</Button>
    <Button disabled>Disabled</Button>
    <Button btnSize="small">Small</Button>
    <Button btnSize="large">Large</Button>
    <Button btnSize="xlarge">XLarge</Button>
    <Button btnType="primary" btnSize="xlarge">
      Primary XLarge
    </Button>
    <Button btnType="primary">
      <Icon name="audio-off-18">close</Icon>
    </Button>
    <h1> RadioButton Groups </h1>
    <RadioCheckGroup
      inputType="radio"
      id="radiobutton1"
      legendText="radiobutton1"
      options={[
        {
          value: 0,
          label: 'coffee',
          checked: true,
          disabled: true
        },
        { value: 1, label: 'tea', disabled: true },
        { value: 2, label: 'hot cocoa', disabled: true }
      ]}
      changeHandler={() => {}}
    />
    <RadioCheckGroup
      inputType="radio"
      id="radiobutton2"
      legendText="radiobutton2"
      options={[
        { value: 0, label: 'coffee', checked: true },
        { value: 1, label: 'tea' },
        { value: 2, label: 'hot cocoa', disabled: true }
      ]}
      changeHandler={() => {}}
    />
    <RadioCheckGroup
      inputType="checkbox"
      id="checkbox1"
      legendText="checkbox1"
      options={[
        { value: 0, label: 'coffee', checked: true },
        { value: 1, label: 'tea' },
        { value: 2, label: 'hot cocoa' }
      ]}
      changeHandler={() => {}}
    />
  </Fragment>
)

export default Buttons
