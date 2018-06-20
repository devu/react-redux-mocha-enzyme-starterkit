import * as Actions from './'

const dummyData = [{ id: 1, name: 'post1' }, { id: 3, name: 'post2' }]

export function fetchData() {
  return {
    type: Actions.FETCH_POSTS,
    payload: dummyData
  }
}
