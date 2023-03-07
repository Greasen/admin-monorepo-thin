/**
 * 项目配置相关
 */

import { defineStore } from 'pinia'
import { store } from '..'
import { NOTICE_CONFIG_ } from '~/enum/system'
import { getAuthCache, setAuthCache } from '~/utils/storage'
import { PIC_SAVE_PATH_KEY, VIDEO_SAVE_PATH_KEY } from '~/enum/cache'
import { CONFIG_ENUM_ } from '~/config/config'

interface Config {
  [key: string]: string
}

/**
 * 配置文件地址存储
 */
export const configState = defineStore({
  id: 'app-config',
  state: (): Config => ({
    // 存储通知相关的配置项
    isShowNotice: getAuthCache(NOTICE_CONFIG_.notice) as string,
    isShowVoice: getAuthCache(NOTICE_CONFIG_.voice) as string,
    isShowTwinkle: getAuthCache(NOTICE_CONFIG_.twinkle) as string,
    // 视频截图路径
    picSavePath: getAuthCache(PIC_SAVE_PATH_KEY, CONFIG_ENUM_.LOCAL) || "C:/DSA5200/pic",
    // 视频录像路径
    videoSavePath: getAuthCache(VIDEO_SAVE_PATH_KEY, CONFIG_ENUM_.LOCAL) || "C:/DSA5200/video",
    // 站点名称
    stationName: ''
  }),
  getters: {
    getStationName(): string {
      return this.stationName
    }
  },
  actions: {
    /**
     * @Description 设置站点名称
     * @date 2022-12-12
     * @param {any} name
     * @returns {any}
     */
    setStationName(name: string) {
      this.stationName = name
    },

    /**
     * @Description 存消息提示状态
     * @date 2022-04-24
     * @param {any} value:boolean
     * @returns {any}
     */
    showNotification(value: string) {
      this.isShowNotice = value
      setAuthCache(NOTICE_CONFIG_.notice, this.isShowNotice)
    },

    /**
     * @Description 存声音提示状态
     * @date 2022-04-24
     * @param {any} value:boolean
     * @returns {any}
     */
    showVoice(value: string) {
      this.isShowVoice = value
      setAuthCache(NOTICE_CONFIG_.voice, this.isShowVoice)
    },

    /**
     * @Description 存闪烁提示状态
     * @date 2022-04-24
     * @param {any} value:boolean
     * @returns {any}
     */
    showTwinkle(value: string) {
      this.isShowTwinkle = value
      setAuthCache(NOTICE_CONFIG_.twinkle, this.isShowTwinkle)
    },
  },
})

export function useConfigWidthOut(): any {
  return configState(store)
}
