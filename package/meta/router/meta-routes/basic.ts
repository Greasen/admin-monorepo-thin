import type { AppRouteRecordRaw } from '/#/route/route'
import { whiteRouteNameList } from '/@/service/routes/white-list'

/**
 * 这边的路由不显示在菜单上，但是不在后台返回的菜单中，需要手动拼上去
 */
export const basic: AppRouteRecordRaw[] = [{
  path: '/user',
  name: 'user',
  component: () => import('~/layout/user/index.vue'),
  meta: { icon: 'user-fill', title: '个人中心' },
  ignoreMenu: true,
}]

// 已有路由的name的白名单，这个名单中对应的路由不会被router.beforeEach拦截
export const whiteRouteNames: string[] = ['user', ...whiteRouteNameList]
