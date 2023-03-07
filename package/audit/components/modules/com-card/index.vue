<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'ComCard',
  props: {
    title: {
      type: String,
      default: '',
    },

    custom: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    emptySize: {
      type: String,
      default: 'small',
    },
    titleWidth: {
      type: [Number, String],
      default: 60,
    },
    titleStyle: {
      type: Object,
      default: () => ({}),
    },
    rem: {
      type: Number,
      default: 22.5,
    },
    tooltip: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const prefixCls = ref('cool-card')
    const classes = computed(() => {
      return [
        'content-wrap',
        {
          custom: props.custom,
          empty: props.empty,
        },
      ]
    })
    const titleStyles = computed(() => {
      const style = { ...props.titleStyle }

      const width = parseInt(`${props.titleWidth}`)
      const styleWidth = {
        width:
          width <= 100
            ? `${width}%`
            : props.rem
              ? `${width / props.rem}rem`
              : `${width}px`,
      }

      Object.assign(style, styleWidth)

      return style
    })

    onMounted(() => {})

    onBeforeUnmount(() => {})

    return {
      prefixCls,
      classes,
      titleStyles,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <div class="header">
      <slot name="title">
        <div class="title">
          <div class="icon" />
          <span class="name">{{ title }}</span>
        </div>

        <div class="action">
          <slot name="action" />
        </div>
      </slot>
    </div>

    <div class="content">
      <slot name="default" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cool-card {
  width: 100%;
  height: 100%;
  padding: 8px 0 10px 0;
  background-color: getCssVar('background', 'color', 'frame');

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0 10px 0;
    width: 100%;
    height: 40px;

    .title {
      flex-grow: 1;
      display: flex;
      align-items: center;
      width: 0;
      height: 100%;

      .icon {
        flex-shrink: 0;
        width: 5px;
        height: 100%;
        background-color: getCssVar('color', 'light');
      }

      .name {
        padding-left: 10px;
        overflow: hidden;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 2px;
        color: getCssVar('text', 'color', 'primary');
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .action {
      flex-shrink: 1;
      margin: 0 14px;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: calc(100% - 40px);
    padding: 4px;
  }
}
</style>
