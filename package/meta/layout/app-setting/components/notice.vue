<script lang="ts">
import type { Ref } from 'vue'
import { defineComponent, ref } from 'vue'
import { useConfigWidthOut } from '~/store/modules/config'

export default defineComponent({
  emits: ['confirm'],
  setup(_props, { emit }) {
    const useConfigStore = useConfigWidthOut()

    const notice: Ref<string> = ref(useConfigStore.isShowNotice || '1')
    const voice: Ref<string> = ref(useConfigStore.isShowVoice || '1')
    const twinkle: Ref<string> = ref(useConfigStore.isShowTwinkle || '1')

    const confirm = (val: string) => {
      if (val)
        setSystemMessage()

      emit('confirm', val)
    }

    function setSystemMessage() {
      useConfigStore.showNotification(notice.value)
      useConfigStore.showVoice(voice.value)
      useConfigStore.showTwinkle(twinkle.value)
    }

    setSystemMessage()

    /**
     * @Description 选择消息开关
     * @date 2021-11-11
     * @returns {any}
     */
    const changeNotice = (value: string): any => {
      notice.value = value
    }

    /**
     * @Description 选择声音开关
     * @date 2021-11-11
     * @returns {any}
     */
    const changeVoice = (value: string): any => {
      voice.value = value
    }

    /**
     * @Description 闪烁提示
     * @date 2021-12-24
     * @returns {any}
     */
    const changeTwinkle = (value: string): any => {
      twinkle.value = value
    }

    return {
      notice,
      voice,
      twinkle,
      confirm,
      changeNotice,
      changeVoice,
      changeTwinkle,
    }
  },
})
</script>

<template>
  <div class="notice">
    <div class="notice-item">
      <label>通知弹窗：</label>
      <el-switch v-model="notice" active-value="1" inactive-value="0" />
    </div>
    <div class="notice-item">
      <label>声音提示：</label>
      <el-switch v-model="voice" active-value="1" inactive-value="0" />
    </div>
    <div class="notice-item">
      <label>闪烁提示：</label>
      <el-switch v-model="twinkle" active-value="1" inactive-value="0" />
    </div>
    <div class="notice-btns">
      <el-button type="primary" @click="confirm('ok')">
        提交
      </el-button>
      <el-button type="primary" plain @click="confirm('')">
        取消
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .notice-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
  }

  .notice-btns {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
}
</style>
