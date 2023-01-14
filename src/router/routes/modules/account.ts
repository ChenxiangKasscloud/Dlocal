import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'

const ACCOUNT: AppRouteRecordRaw = {
  path: '/account',
  name: 'account',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.account',
    requiresAuth: true,
    icon: 'icon-user-group',
    order: 1
  }
}

export default ACCOUNT
