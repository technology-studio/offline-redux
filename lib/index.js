/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-07-09T20:39:11+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import { offlineRedux } from './Redux/Model/OfflineRedux'
import {
  selectOfflineModelIsOffline,
  selectOfflineModelDateTime,
} from './Redux/Model/Selectors'

import {
  redux,
  type RootStateFragment,
} from './Redux'

export {
  redux,
  offlineRedux,
  selectOfflineModelIsOffline,
  selectOfflineModelDateTime,
}

export type {
  RootStateFragment,
}
