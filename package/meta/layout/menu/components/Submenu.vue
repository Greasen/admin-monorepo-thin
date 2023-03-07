<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  routeChildren: {
    type: Object,
    default: () => {},
  },
})

defineOptions({
  name: 'Submenu',
})
</script>

<template>
  <el-sub-menu :index="item.name" popper-class="submenu-class">
    <template #title>
      <div v-if="item.meta.icon" class="nav-menu-style">
        <i class="iconfont" :class="item.meta.icon" />
        <span class="menu-title">{{ item.meta.title }}</span>
      </div>
      <span v-else class="menu-title">{{ item.meta.title }}</span>
    </template>
    <slot />
  </el-sub-menu>
</template>
