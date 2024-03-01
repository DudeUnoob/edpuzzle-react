import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useAuthStore = create(persist(
  (set, get) => ({
    userAuth: {},
    updateUserAuth: (authState) => set({ userAuth: authState })
  }),
  {
    name: "auth-storage", 
    storage: createJSONStorage(() => sessionStorage), 
  }
))

export default useAuthStore