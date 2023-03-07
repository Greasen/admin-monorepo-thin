import { defineStore } from 'pinia'
import { ROLES_KEY } from '~/enum/cache'
import { getAuthCache, setAuthCache } from '~/utils/storage'
import { store } from '../index'
import type { AppRouteRecordRaw } from '/#/route/route'

export const userStore = defineStore({
  id: 'app-router',
  state: () => {
    return {
      routes: (getAuthCache(ROLES_KEY) && JSON.parse(getAuthCache(ROLES_KEY) as string)) || [],
      activeFirstRoute: {} as AppRouteRecordRaw,
      // 当前是否显示外部链接以及外部链接的地址
      externalLinkUrl: null,
      buttonPermissionList: [] as any[],
    }
  },

  getters: {
    getRoutes(): any | any[] {
      return this.routes
    },
  },

  actions: {
    /**
     * @Description 设置路由，根据不同的用户权限读取不同的路由
     * @date 2022-10-12
     * @param {any} route:Object
     * @returns {any}
     */
    setRoutes(route: AppRouteRecordRaw[]) {
      this.routes = route
      setAuthCache(ROLES_KEY, JSON.stringify(route))
    },

    /**
     * @Description 设置选中一级路由
     * @date 2022-10-24
     * @param {any} route
     * @returns {any}
     */
    setActiveFirstRoute(route: AppRouteRecordRaw) {
      this.activeFirstRoute = route
    },

    setExternalLinkUrl(url: null) {
      this.externalLinkUrl = url
    },
    setButtonPermissionList(list: any[]) {
      this.buttonPermissionList = list
    },
  },
})

export function useRouteWithOut() {
  return userStore(store)
}
