import { defineStore } from 'pinia'
import { store } from '~/store'

export const userStore = defineStore({
  id: 'app-admin',
  state: () => {
    return {
      adminFlag: false,
    }
  },

  getters: {
    getFlag() {
      return this.adminFlag
    },
  },

  actions: {
    setFlag(flag: boolean) {
      this.adminFlag = flag
    },
  },
})

export function useAdminWithOut() {
  return userStore(store)
}
