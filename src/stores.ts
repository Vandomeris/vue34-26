import { reactive } from 'vue'

interface UserStore {
  list: string[]
  addUserToList: (newUser: string) => void
}

export const userStore = reactive<UserStore>({
  list: [],
  addUserToList(newUser: string) {
    if (!this.list.includes(newUser)) {
      this.list.push(newUser)
    }
  },
})
