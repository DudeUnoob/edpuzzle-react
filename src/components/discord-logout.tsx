"use client";
import React, { useEffect } from "react";
import { supabase } from "../functions/supabaseConnect.ts";
import useAuthStore from "../context/authStateManagement.ts";


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