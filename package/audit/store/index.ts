import { defineStore } from 'pinia'
import { store } from '~/store'

export const userStore = defineStore({
  id: 'app-audit',
  state: () => {
    return {
    }
  },

  getters: {},

  actions: {},
})

export function useAuditWithOut() {
  return userStore(store)
}
