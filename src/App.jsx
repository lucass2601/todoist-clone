import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router"

import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile)

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    setIsSidebarOpen(!isMobile)
  }, [isMobile])


  const getTitle = () => {
    switch (location.pathname) {
      case "/app/inbox":
        return "Inbox"
        break;
      case "/app/today":
        return "Today"
        break;
      default:
        return "Unknown Path"
        break;
    }
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpenPrev => !isSidebarOpenPrev)
  }

  return (
    <div className="h-full flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={` bg-secondary flex-1 transition-all duration-300 p-2 ${isSidebarOpen && !isMobile ? 'ml-64' : 'ml-0'}`}>
        {!isSidebarOpen && <a className="text-white absolute text-[24px] flex w-max hover:cursor-pointer" onClick={toggleSidebar}>
          <ion-icon name="menu-outline"></ion-icon>
        </a>}
        <div className="px-[16%] pt-12">
          <p className="text-2xl text-white">{getTitle()}</p>
          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default App
