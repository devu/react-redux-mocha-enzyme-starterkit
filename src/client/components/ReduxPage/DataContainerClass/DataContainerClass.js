/* eslint no-console:0 */
import React, { Fragment } from 'react'

class DataContainerClass extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    console.log('DataContainerClass::componentWillMount')
  }

  componentDidMount() {
    console.log('DataContainerClass::componentDidMount')
  }

  componentWillUnmount() {
    console.log('DataContainerClass::componentDidUnmount')
  }

  render() {
    console.log('DataContainerClass::render')
    return (
      <Fragment>
        {this.state.loading ? (
          <div> fetching data... </div>
        ) : (
          <div> {'<DataContainerClass> Content'} </div>
        )}
      </Fragment>
    )
  }
}

export default DataContainerClass
