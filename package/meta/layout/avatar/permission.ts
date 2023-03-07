import { ref } from "vue"
import { getRouteList } from "~/api/common/login"
import { APP_CONFIG_ID_ } from "/@/service/config/common"

/**
 * @Description 获取配置端权限菜单，如果能有菜单的话，那说明可以跳转
 * @date 2022-12-06
 * @returns {any}
 */
export function usePatrolConfig() {
  const patrolConfigEnable = ref(false)
  async function setPatrolConfigPermission() {
    const { data } = await getRouteList({ appId: APP_CONFIG_ID_ })
    patrolConfigEnable.value = process.env.NODE_ENV === "production" && !!(data && data.length)
  }
  setPatrolConfigPermission()

  return patrolConfigEnable
}