import SidebarMenuItem from "./SidebarMenuItem"

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div
            className={`p-2 fixed left-0 top-0 bg-secondary-light h-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                } w-64`}
        >
            <div className="sidebar-header flex">
                <div className="sidebar-header__content flex justify-between items-center w-full">
                    <div className="flex gap-2">
                        <div className="user-avatar flex justify-center items-center rounded-full w-[24px] bg-emerald-500">
                            <span className="text-[12px] text-white">LF</span>
                        </div>
                        <div className="user-name">
                            <span className="text-white text-[12px]">Lucas</span>
                        </div>
                    </div>
                    <a className="text-white text-[24px] flex hover:cursor-pointer" onClick={toggleSidebar}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </a>
                </div>
            </div>
            <div className="mt-5">
                <SidebarMenuItem title="Inbox" icon="file-tray" path="inbox" />
                <SidebarMenuItem title="Today" icon="calendar-number" path="today" />
            </div>
        </div >
    )
}
export default Sidebar