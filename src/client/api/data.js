/* eslint no-param-reassign:0 dot-notation:0 */
import fetchLib from '../../utils/fetchLib'

const applyAuthHeaders = (options) => {
  const { headers } = options
  headers['Authorization'] = 'Basic Ymx1ZWJlcnJ5OmVAQkhSTUF2M2V5S2xiT1VjS0tAWl56Q0ZhMDRtYw=='
  headers['X-Roles'] = 'ContentPlanningAdmin'

  return options
}

export const getData = async () => {
  const url = 'https://uat-data.pearsoncms.net/api/api/search?db=qa4&type=Distributable&status=https://schema.pearson.com/ns/contentlifecyclestatus/wip,https://schema.pearson.com/ns/contentlifecyclestatus/final&sort=dateModified,Descending&page=1&max-member-count=5&deep=false'

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Prefer:
        'embedLevel=2;predicate=https://schema.pearson.com/ns/xowl/identifiedBy,usesRegister,https://schema.pearson.com/ns/system/inRegistry'
    }
  }

  return fetchLib(url, applyAuthHeaders(options))
}

