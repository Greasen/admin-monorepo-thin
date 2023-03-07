<script lang="ts" setup>

defineOptions({
  name: 'audit',
})
</script>

<template>
  <div class="layout-content">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.layout-content {
  position: relative;
  flex-grow: 1;
  height: 1px;
  padding: 14px;
  background-color: getCssVar('layout', 'background', 'color');
}
</style>
