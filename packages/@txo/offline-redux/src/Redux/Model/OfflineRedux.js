/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-03-02T16:23:03+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import {
  createRedux,
  type Action,
  type Redux,
} from '@txo/redux'
import update from 'immutability-helper'

export type Creators = {
  setOffline: () => Action,
  unsetOffline: () => Action,
}

export type State = {|
  dateTime?: string,
|}

export const offlineRedux: Redux<State, Creators> = createRedux<State, _>({
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
