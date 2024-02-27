import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-black">
      <Navbar className='top-2'/>
      <p className='text-black dark:text-white'></p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
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
        <a href='https://unpuzzle.org/router/discord' target='_blank'>
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
              href="https://edpuzzle.com"
              src={EdpuzzleLogo}
              description=""
            />
            <ProductItem
              title="Quizlet"
              href="https://quizlet.com"
              src={QuizletLogo}
              description=""
            />
            <ProductItem
              title="Quizizz"
              href="https://joinmyquiz.com"
              src={QuizizzLogo}
              description=""
            />
            <ProductItem
              title="Kahoot"
              href="https://kahoot.com"
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
