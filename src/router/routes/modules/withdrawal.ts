import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'

const WITHDRAWAL: AppRouteRecordRaw = {
  path: '/withdrawal',
  name: 'withdrawal',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.withdrawal',
    requiresAuth: true,
    icon: 'icon-archive',
    order: 1
  }
}

export default WITHDRAWAL
