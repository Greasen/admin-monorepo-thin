// import { LAYOUT } from '~/router/constant'
import type { AppRouteModule } from '/#/route/route'
export const CONTAINER = () => import('/@/admin/index.vue')


const admin: AppRouteModule = {
  path: 'admin',
  name: 'admin',
  meta: {
    title: '权限管理',
    icon: 'icon-quanxianguanli',
  },
  component: CONTAINER,
  children: [],
}

export default admin
