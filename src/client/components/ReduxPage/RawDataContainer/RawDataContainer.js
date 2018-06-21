/* eslint no-console:0 */
import React, { Fragment } from 'react'
import { fetchLib } from '../../../../utils/fetchLib'

class RawDataContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: [],
      status: {}
    }
  }

  componentWillMount() {
    console.log('RawDataContainer::componentWillMount')
  }

  componentDidMount() {
    console.log('RawDataContainer::componentDidMount')

    this.getRawData()
  }

  componentWillUnmount() {
    console.log('RawDataContainer::componentDidUnmount')
  }

  getRawData = async () => {
    try {
      const data = await fetchLib('https://jsonplaceholder.typicode.com/posts')
      this.setState({ loading: false, status: 'OK', data })
    } catch (e) {
      this.setState({ loading: false, status: e.message })
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          'fetching...'
        ) : (
          <div>
            <div> {'<RawDataContainer> Content'} </div>
            <div> {`Number of items: ${this.state.data.length}`} </div>
            <div> {`Status: ${this.state.status}`} </div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default RawDataContainer
