<script setup lang="ts">
import { ref } from "vue"
import appLogo from "../logo/index.vue"
import appMenu from "../menu/index.vue"
import appAvatar from "../avatar/index.vue"
import appSetting from "../app-setting/index.vue"
import { useCommonWithOut } from "~/store/modules/common"
import emitter from "~/logics/mitt"
import { emitsEnum } from "~/enum/emits"

const userStore = useCommonWithOut()

const setRef = ref<InstanceType<typeof appSetting> | null>(null)

defineOptions({
  name: "appNav",
})

const isEmbeddedMode = userStore.isEmbeddedMode

/**
 * @Description 弹出系统设置弹窗
 * @date 2022-10-26
 * @returns {any}
 */
function showSettingModal() {
  setRef.value?.openModal()
}

/**
 * @Description 通知业务子空间
 * @date 2022-10-26
 * @returns {any}
 */
function showWarning() {
  emitter.emit(emitsEnum.showWarningModal)
}
</script>

<template>
  <header class="layout-header">
    <div v-if="isEmbeddedMode" class="station-name c-ellipsis">
      <i icon="iconfont icon-dingwei1" />
    </div>

    <div class="row">
      <div class="row-logo">
        <div v-if="isEmbeddedMode" class="row-logo-corner">
          <i class="row-corner corner-left-top" />
          <i class="row-corner corner-right-top" />
          <i class="row-corner corner-left-bottom" />
          <i class="row-corner corner-right-bottom" />
        </div>
        <app-logo v-else />
      </div>

      <div class="row-menu">
        <app-menu />
      </div>

      <div v-if="!isEmbeddedMode" class="row-avatar">
        <i class="iconfont icon-yujing" @click="showWarning" />
        <i class="iconfont icon-peizhi" @click="showSettingModal" />
        <app-avatar />
      </div>
    </div>
    <app-setting ref="setRef" />
  </header>
</template>

<style lang="scss" scoped>
$cornerWidth: 3px;

.layout-header {
  display: flex;
  padding: 0 12px;
  width: 100%;
  height: 60px;
  background-color: getCssVar("menu", "bg", "color");
  align-items: center;
  justify-content: space-between;

  .station-name {
    margin-right: 10px;
    width: 300px;
    font-size: 20px;
    color: getCssVar("color", "white");

    .icon {
      margin-right: 10px;
      font-size: 22px;
      color: getCssVar("color", "white");
    }
  }
  .row {
    position: relative;
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    height: 100%;
    // padding-right: 20px;

    .row-logo {
      display: flex;
      align-items: center;
      width: 30%;
    }

    .row-menu {
      flex: 1;
      height: 100%;
    }

    .row-avatar {
      display: flex;
      align-items: center;
      height: 85%;
      color: getCssVar("color", "white");

      .iconfont {
        font-size: 16px;
        color: getCssVar("color", "white");
        cursor: pointer;
      }

      .icon-yujing {
        margin-right: 12px;
      }
    }

    .align-center {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .row-corner {
      position: absolute;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-style: solid;
      border-color: #43b9fe;
      &.corner-left-top {
        top: -1px;
        left: -1px;
        border-width: $cornerWidth 0 0 $cornerWidth;
      }
      &.corner-right-top {
        top: -1px;
        right: -1px;
        border-width: $cornerWidth $cornerWidth 0 0;
      }
      &.corner-left-bottom {
        bottom: -1px;
        left: -1px;
        border-width: 0 0 $cornerWidth $cornerWidth;
      }
      &.corner-right-bottom {
        bottom: -1px;
        right: -1px;
        border-width: 0 $cornerWidth $cornerWidth 0;
      }
    }
  }
}
</style>
