import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'

const VISUALIZATION: AppRouteRecordRaw = {
  path: '/visualization',
  name: 'visualization',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.visualization',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 2
  },

  children: [
    {
      path: 'data-analysis',
      name: 'DataAnalysis',
      component: () => import('@/views/visualization/data-analysis/index.vue'),
      meta: {
        locale: 'menu.visualization.dataAnalysis',
        requiresAuth: true,
        roles: ['admin']
      }
    },
    {
      path: 'multi-dimension-data-analysis',
      name: 'MultiDimensionDataAnalysis',
      component: () =>
        import('@/views/visualization/multi-dimension-data-analysis/index.vue'),
      meta: {
        locale: 'menu.visualization.multiDimensionDataAnalysis',
        requiresAuth: true,
        roles: ['admin']
      }
    },
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*']
      }
    },

    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: {
        locale: 'menu.dashboard.monitor',
        requiresAuth: true,
        roles: ['admin']
      }
    }
  ]
}

export default VISUALIZATION
