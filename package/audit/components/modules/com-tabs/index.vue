<script lang="ts" setup>
defineProps({
  active: {
    type: Number,
    default: 0,
  },

  tabs: {
    type: Array,
    default: () => [],
  },

  props: {
    type: Object,
    default: () => {
      return {
        content: 'content',
        key: '',
        icon: 'icon',
      }
    },
  },
})

const emit = defineEmits(['update:active', 'tabClick'])

defineOptions({
  name: 'ComTabs',
})

function handleClick(item, index: any) {
  emit('update:active', index)
  emit('tabClick', item, index)
}
</script>

<template>
  <div class="com-tabs">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="tab[props.key]"
        :class="{ 'com-active': active === index }"
        @click="handleClick(tab, index)"
      >
        <div class="com-item">
          <i v-if="tab[props.icon]" :class="`iconfont ${tab[props.icon]}`" />
          <span v-text="tab[props.content]" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.com-tabs {
  > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > li {
      padding: 0 12px;
      color: getCssVar('text', 'color', 'primary');
      background-color: getCssVar('color', 'primary', '2');
      border: 1px getCssVar('border', 'color') solid;
      margin-right: -1px;
      cursor: pointer;

      &:first-child {
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
      }

      &:last-child {
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
      }

      &.com-active {
        color: getCssVar('color', 'white');
        background-color: getCssVar('color', 'primary');
      }
    }
  }
}
</style>
