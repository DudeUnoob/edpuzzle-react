// import useAuthStore from "../context/authStateManagement";
import { supabase } from "./supabaseConnect"


async function getAuthState() {
   await supabase.auth.getSession().then(({ data, error }) => {
        if (!error && data) {
            console.log(data)
            return data
        } else {
            return error
        }
   })
}

export default getAuthState;