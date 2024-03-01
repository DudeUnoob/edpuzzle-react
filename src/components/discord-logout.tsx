"use client";
import React, { useEffect } from "react";
import { supabase } from "../functions/supabaseConnect";
import useAuthStore from "../context/authStateManagement";


export const DiscordLogout = () => {

    const handleLogout = async() => {
        await supabase.auth.signOut().then((value) => {
            localStorage.setItem("test", JSON.stringify(value))
        })
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}