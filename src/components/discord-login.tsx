"use client";
import React, { useEffect } from "react";
import { supabase } from "../functions/supabaseConnect";
import useAuthStore from "../context/authStateManagement";

export const DiscordLogin = () => {
    useEffect(() => {
        OAuthLogin();
    }, []);

    async function OAuthLogin() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'discord',
        });

    }

    return (
        <></>
    );
}
