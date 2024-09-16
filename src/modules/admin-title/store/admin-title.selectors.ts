import { type State } from 'src/types/state'

import { NameSpace } from 'src/helpers/consts'

export const getAdminTitle = (state: State) => state[NameSpace.AdminTitle].title
