"use client";
// import React, { useEffect } from "react";
import { HeroParallax } from "../components/hero-parallax";
import { ContainerScroll } from "../components/container-scroll-animation";
import { products } from "../components/hero-parallax";
import { users } from "../components/container-scroll-animation";
import { HoverEffect } from "../components/card-hover-effect";
import { useEffect } from "react";
// import getAuthState from "../functions/getAuthState";
// import useAuthStore from "../context/authStateManagement"
// import { supabase } from "../functions/supabaseConnect"


export default function Home ({ }) {

  // useEffect(() => {

  //   async function check(){
  //     await supabase.auth.getSession().then((value) => {
  //       console.log(value)
  //     })
  //   }

  //   check()
  // }, [])

  useEffect(() => {

    // const userData = useAuthStore.getState().userAuth
     
    
  },[])
   return (
   <>
   <HeroParallax products={products} />

   <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                help
              </span>
            </h1>
          </>
        }
      />

  <div className="max-w-5xl mx-auto px-8">
    <HoverEffect items={products}/>
  </div>
      
    </div>

   
    </>
    )
}
