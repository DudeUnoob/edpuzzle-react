import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useLocation, BrowserRouter} from "react-router-dom";
import Home from "./routes/Home"
import { Menu, MenuItem, ProductItem, HoveredLink } from "../src/components/navbar-menu"
import { cn } from "../src/utils/cn"
import EdpuzzleLogo from "../src/assets/images/edpuzzle_logo.png";
import KahootLogo from "../src/assets/images/kahoot_logo.png";
import QuizizzLogo from "../src/assets/images/quizizz_logo.png";
import QuizletLogo from "../src/assets/images/quizlet_logo.png";
import { supabase } from "../src/functions/supabaseConnect"
import { DiscordLogin } from './components/discord-login';
import useAuthStore from "../src/context/authStateManagement"
import { DiscordLogout } from './components/discord-logout';


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // supabase.auth.onAuthStateChange((event, session) => {
    //   setTimeout(async () => {
    //     // await on other Supabase function here
    //     // this runs right after the callback has finished

    //     if(event == "SIGNED_IN") {
    //       const updateUserAuth = useAuthStore.getState().updateUserAuth;
    //       updateUserAuth(session);
    //     }
        
    //     if(event == "SIGNED_OUT"){
    //       const updateUserAuth = useAuthStore.getState().updateUserAuth
    //       updateUserAuth({ authSession: null })
    //     }

          
      
    //   }, 0)
    // })

    async function checkAuthState() {
      await supabase.auth.onAuthStateChange((event, session) => {
        if(event == "INITIAL_SESSION" || event == "SIGNED_IN"){
          const updateUserAuth = useAuthStore.getState().updateUserAuth
           updateUserAuth(session)
        } 

        if(event == "SIGNED_OUT"){
          const updateUserAuth = useAuthStore.getState().updateUserAuth
          updateUserAuth({ authSession: null })
        }
      })
    }

    checkAuthState()
  }, [])

  return (
    <>
    <div className="bg-black">
      <Navbar className='top-2'/>
      <p className='text-black dark:text-white'></p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login/discord" element={<DiscordLogin />}/>
          <Route path="/logout" element={<DiscordLogout />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a target='_blank' href='/login/discord'>
        <MenuItem setActive={setActive} active={active} item="Login">
            {/* <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink> */}
        </MenuItem>
        </a>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Edpuzzle"
              href="/edpuzzle"
              src={EdpuzzleLogo}
              description=""
            />
            <ProductItem
              title="Quizlet"
              href="/quizlet"
              src={QuizletLogo}
              description=""
            />
            <ProductItem
              title="Quizizz"
              href="/quizizz"
              src={QuizizzLogo}
              description=""
            />
            <ProductItem
              title="Kahoot"
              href="/kahoot"
              src={KahootLogo}
              description=""
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            {/* <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App
