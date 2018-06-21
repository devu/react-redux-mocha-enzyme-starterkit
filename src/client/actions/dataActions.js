import * as Actions from './'
import getData from '../api/data'

export const fetchData = async () => ({
  type: Actions.FETCH_POSTS,
  payload: await getData()
})
