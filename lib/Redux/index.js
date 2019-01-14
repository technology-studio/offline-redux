/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2019-01-14T12:54:49+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import { combineRedux } from '@txo/redux'
import {
  redux as modelRedux,
  type State as ModelState,
} from './Model'

export type State = {
  model: ModelState,
}

export type RootStateFragment = {
  offline: State,
}

export const redux = combineRedux({
  model: modelRedux,
})
