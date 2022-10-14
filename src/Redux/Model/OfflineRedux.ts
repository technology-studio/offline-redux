/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-03-02T16:23:03+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
**/

import {
  createRedux,
  type Redux,
  type ReduxHandler,
} from '@txo/redux'
import update from 'immutability-helper'

export type Handlers = {
  setOffline: ReduxHandler<State, undefined>,
  unsetOffline: ReduxHandler<State, undefined>,
}

export type State = {
  dateTime?: string,
}

export const offlineRedux: Redux<State, State, keyof Handlers, Handlers> = createRedux<State, keyof Handlers, Handlers>({
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
