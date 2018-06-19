import React, { Fragment } from 'react'

import { Select } from '@pearson-components/elements-sdk/build/dist.elements-sdk'

const Selectors = () => (
  <Fragment>
    <h2> Selectors </h2>
    <Select
      id="select"
      changeHandler={() => {}}
      selectedOption="mac"
      labelText="Select Label:"
      options={['ipad', 'mac', 'iphone']}
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
  </Fragment>
)

export default Selectors
