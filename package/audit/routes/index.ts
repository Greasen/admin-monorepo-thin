import type { AppRouteModule } from '/#/route/route'
import CONTAINER from '/@/audit/index.vue'

const auditManage: AppRouteModule = {
  path: 'audit-manage',
  name: 'audit-manage',
  component: CONTAINER,
  meta: {
    icon: 'icon-shenjiguanli',
    title: '审计管理',
  },
  children: [],
}

export default auditManage
