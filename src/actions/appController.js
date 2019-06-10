/* eslint no-console:0 */
import { startApplicationService } from 'services'
import { dispatch } from 'store/storeContainer'
import {
  INITIALISE_APP,
  APP_INITIALISED
} from './constants'

export const startApplication = async () => {
  dispatch({ type: INITIALISE_APP })
  await startApplicationService()

  dispatch({ type: APP_INITIALISED })
}
