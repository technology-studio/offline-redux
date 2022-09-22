/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-03-02T16:23:03+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
**/

import {
  createRedux,
  type ActionCreator,
  type Redux,
  type ReduxHandler,
} from '@txo/redux'
import update from 'immutability-helper'

export type Creators = {
  setOffline: ActionCreator<Record<string, never>>,
  unsetOffline: ActionCreator<Record<string, never>>,
}

export type State = {
  dateTime?: string,
}

export const offlineRedux: Redux<State, Creators> = createRedux<State, {
  setOffline: ReduxHandler<State, Record<string, never>>,
  unsetOffline: ReduxHandler<State, Record<string, never>>,
}>({
  filter: {
    dataTime: true,
  },
  initialState: {
    dateTime: undefined,
  },
  handlers: {
    setOffline: state => ({
      dateTime: new Date().toISOString(),
    }),
    unsetOffline: state => update(state, { $set: { dateTime: undefined } }),
  },
  prefix: 'offline.model.offline.',
})
