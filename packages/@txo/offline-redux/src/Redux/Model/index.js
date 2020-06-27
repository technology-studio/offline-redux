/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-03-02T17:07:52+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import { combineRedux } from '@txo/redux'
import {
  type State as OfflineState,
  offlineRedux,
} from './OfflineRedux'

export type State = {
  offline: OfflineState,
}

export const redux = combineRedux({
  offline: offlineRedux,
})
