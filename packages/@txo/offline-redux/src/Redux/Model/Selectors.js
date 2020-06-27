/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2019-01-14T13:09:01+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import { type RootStateFragment } from '..'

export const selectOfflineModelIsOffline = (state: RootStateFragment): boolean => (
  !!state.offline.model.offline.dateTime
)
export const selectOfflineModelDateTime = (state: RootStateFragment): ?string => (
  state.offline.model.offline.dateTime
)
