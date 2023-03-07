<script lang="ts" setup>
import { useMenu } from './hooks/useMenu'
import myComponent from './component.vue'
import { useCutDom } from '~/hooks/web/useCrossDom'

const { openKeys, isEmbeddedMode, routes } = useMenu()

defineOptions({
  name: 'appMenu',
})

/**
 * @Description 折叠
 * @date 2022-04-27
 * @param {any} _index:string|number
 * @param {any} _indexPath:string[]
 * @returns {any}
 */
function handleClose(_index: string | number, _indexPath: string[]) {
  const newOpenKeys = openKeys.value.filter((k: string) => k !== _index)
  openKeys.value = newOpenKeys  
  useCutDom('submenu-class', '.el-popper')
}

/**
 * @Description 展开
 * @date 2022-04-27
 * @param {any} _index:string|number
 * @param {any} _indexPath:string[]
 * @returns {any}
 */
function handleOpen(_index: string | number, _indexPath: string[]) {
  const paths = new Set(_indexPath)
  openKeys.value = [...paths]
  useCutDom('submenu-class', '.el-popper')
}
</script>

<template>
  <el-menu
    class="app-menu"
    router
    mode="horizontal"
    :default-active="$route.name"
    :default-openeds="openKeys"
    :class="{ 'embedded-header': isEmbeddedMode }"
    @open="handleOpen"
    @close="handleClose"
  >
    <my-component
      v-for="route in routes"
      :key="route.name"
      :index="route.name"
      :item="route"
    />
  </el-menu>
</template>

<style lang="scss" scoped>
.app-menu {
  display: flex;
  flex: 1;
  height: 100%;
  margin-right: 12px;
  border-bottom: none;
}

:deep(.el-sub-menu__title:hover) {
  background-color: getCssVar('color', 'primary', 'dark', '2') !important;
}
</style>
