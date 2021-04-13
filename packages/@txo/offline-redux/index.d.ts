/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2021-03-12T17:03:63+01:00
 * @Copyright: Technology Studio
**/

import type { NodeRedux } from '@txo/redux'
declare module '@txo/offline-redux' {
  type ModelState = {
    offlineState: {
      dateTime?: string,
    },
  }
  type State = {
    model: ModelState,
  }
  type RootStateFragment = {
    offline: State,
  }
  const redux: NodeRedux<State>
  const selectOfflineModelIsOffline: (state: RootStateFragment) => boolean
}
