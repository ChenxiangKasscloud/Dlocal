import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'

const INCOME: AppRouteRecordRaw = {
  path: '/incom',
  name: 'income',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.income',
    requiresAuth: true,
    icon: 'icon-bookmark',
    order: 2
  }
}

export default INCOME
