"use client";
import React, { useEffect } from "react";
import { supabase } from "../functions/supabaseConnect.ts";
import useAuthStore from "../context/authStateManagement.ts";

export const DiscordLogin = () => {
    useEffect(() => {
        OAuthLogin();
    }, []);

    async function OAuthLogin() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'discord',
        });

        console.log(data, error)
    }

    return (
        <></>
    );
}
