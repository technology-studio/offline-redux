/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2019-01-14T13:09:01+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
**/

import { type RootStateFragment } from '..'

export const selectOfflineModelIsOffline = (state: RootStateFragment): boolean => (
  state.offline.model.offline.dateTime != null && state.offline.model.offline.dateTime !== ''
)
export const selectOfflineModelDateTime = (state: RootStateFragment): string | undefined => (
  state.offline.model.offline.dateTime
)
