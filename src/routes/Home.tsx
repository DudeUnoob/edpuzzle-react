"use client";
import React from "react";
import { HeroParallax } from "../components/hero-parallax";
import { ContainerScroll } from "../components/container-scroll-animation";
import { products } from "../components/hero-parallax";
import { users } from "../components/container-scroll-animation";
export default function Home ({ }) {
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
                ...
              </span>
            </h1>
          </>
        }
      />
    </div>
    </>
    )
}
