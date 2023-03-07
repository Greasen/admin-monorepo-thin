<script lang="ts" setup>
defineProps({
  description: {
    type: String,
    default: '暂无数据',
  },
  size: {
    type: Number,
    default: 70,
  },
})

defineOptions({
  name: 'ComNoData',
})
</script>

<template>
  <div class="no-data">
    <el-empty :description="description" :image-size="size" />
  </div>
</template>

<style lang="scss" scoped>
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #888;

  .icon {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: normal;
  }

  span {
    font-size: 14px;
  }
}
</style>
