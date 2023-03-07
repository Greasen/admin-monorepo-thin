<script lang="ts" setup>
// 这里是作为子空间的路由搭载，以及组件库的命名空间配置，这里在打包的时候要注意，因为 vue 打包策略，setup 函数中不能为空；为空导致多组件库的使用溯源问题
// setup 函数为空的时候，打包出来的结构完全不同，导致使用组件库的时候各种溯源找不到头，St(); $I()

// 还是不推荐使用多个版本的组件库同时安装，会导致各种奇奇怪怪的问题
import { provide } from 'vue'
import { pwVerifyResourceName } from './enum/resource-name'
import emitter from '~/logics/mitt'
import passwordVerify from '~/hooks/web/usePasswordVerify'
import { useCommonWithOut } from '~/store/modules/common'

provide('passwordVerify', passwordVerify)
provide('pwVerifyResourceName', pwVerifyResourceName)

const userStore = useCommonWithOut()
const hideHeader = userStore.hideHeader

/**
 * @Description 退出登录事件线
 * @date 2022-10-24
 * @param {any} 'logout'
 * @param {any} (
 * @returns {any}
 */
emitter.on('logout', () => {})

defineOptions({
  name: 'admin',
})
</script>

<template>
  <div class="layout-content">
    <admin-com-breadcrumb
      v-if="!hideHeader"
      class="breadcrumb"
    />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.layout-content {
  position: relative;
  // flex-grow: 1;
  height: 100%;
  padding: 14px;
}
</style>
