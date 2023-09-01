/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2019-01-14T12:54:49+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
**/

import { combineRedux } from '@txo/redux'
import '@txo-peer-dep/redux'

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

declare module '@txo-peer-dep/redux/lib/Model/Types' {
  interface DefaultRootState {
    offline: State,
  }
}

export const redux = combineRedux({
  model: modelRedux,
})
