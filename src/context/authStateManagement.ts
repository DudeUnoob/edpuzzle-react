import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useAuthStore = create<any>(persist(
  (set: any) => ({
    userAuth: {},
    updateUserAuth: (authState: any) => set({ userAuth: authState })
  }),
  {
    name: "auth-storage", 
    storage: createJSONStorage(() => sessionStorage), 
  }
))

export default useAuthStore
