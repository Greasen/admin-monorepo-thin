<script lang="ts" setup>
defineOptions({
  name: "AppMain",
})

</script>

<template>
  <main class="layout-main">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
.layout-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 1px;
}
</style>
