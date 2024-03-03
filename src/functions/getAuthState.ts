import useAuthStore from "../context/authStateManagement";
import { supabase } from "./supabaseConnect"


async function getAuthState() {
   await supabase.auth.getSession().then(({ data, error }) => {
        if (!error && data) {
            return data
        } else {
            return error
        }
   })
}

export default getAuthState;