import type { Ref } from 'vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { filterRoute } from '~/hooks/web/useFilterRoutesByMenu'
import { router } from '~/router'
import { useCommonWithOut } from '~/store/modules/common'
import { useRouteWithOut } from '~/store/modules/route'
import { filterFirstTreeNode } from '~/utils/tools'
import type { AppRouteRecordRaw } from '/#/route/route'

export function useMenu() {
  const userStore = useCommonWithOut()
  const isEmbeddedMode = userStore.isEmbeddedMode

  const route = useRoute()

  const routeStore = useRouteWithOut()
  const menuList = computed<AppRouteRecordRaw[]>(() => routeStore.getRoutes)

  const routes: Ref<AppRouteRecordRaw[]> = ref([])
  const selectedKeys: Ref<string[]> = ref([])
  const openKeys: Ref<string[]> = ref([])

  watch(
    () => menuList.value,
    () => {
      initActiveRoute()
    },
  )

  watch(
    () => route.fullPath,
    (val) => {
      selectedKeys.value = [val]
    },
  )

  /**
   * 初始化设置选中路由项
   */
  onMounted(() => {
    initActiveRoute()
  })

  /**
   * @Description 如果初始化进入页面是 '/' 需要重定向到第一个页面
   * @date 2022-07-26
   * @returns {any}
   */
  function initActiveRoute() {
    const { name }: { [key: string]: string | any } = route
    if (!menuList.value || !menuList.value.length)
      return

    const root = filterFirstTreeNode(menuList.value, item => {
      return item.name === 'Root'
    })

    routes.value = filterRoute(root.children || [])
    // routes.value = filterRoute(menuList.value)

    if (
      routes.value.length === 1
      && routes.value[0].children
      && routes.value[0].children.length
    )
      routes.value = routes.value[0].children

    // menuList 菜单列表中包含不在菜单中的路由项，不能过滤掉，否则会跳到首页；
    const routeInList = filterFirstTreeNode(menuList.value, (route) => {
      return route.name === name
    })

    if (name === 'Root' || !routeInList) {
      const firstRoute = filterFirstTreeNode(
        routes.value,
        (node: AppRouteRecordRaw) => {
          return !node.children || !node.children.length
        },
      )
      router.push({
        name: firstRoute.name
      })
      selectedKeys.value = [firstRoute.name]
    }
    else {
      router.push({
        name
      })
      selectedKeys.value = [name]
    }
  }

  return {
    selectedKeys,
    openKeys,
    isEmbeddedMode,
    menuList,
    routes,
  }
}
