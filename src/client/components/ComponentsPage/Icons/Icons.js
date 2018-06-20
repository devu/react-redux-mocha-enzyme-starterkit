import React, { Fragment } from 'react'

import { Icon } from '@pearson-components/elements-sdk/build/dist.elements-sdk'

const Icons = () => (
  <Fragment>
    <h1>Icons</h1>
    <Icon name="remove-sm-18" />
    <Icon name="remove-sm-18">close</Icon>
    <h2>
      <Icon name="warning-24" /> Alert! Form was not submitted!
    </h2>
  </Fragment>
)

export default Icons
