import { NavLink } from "react-router"

function SidebarMenuItem({ title, icon, path }) {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `${isActive ? "bg-primary-dark" : 'hover:bg-secondary-hover'} flex items-center hover:cursor-pointer`
            }
        >
            <span className="text-white text-[24px] flex w-max">
                <ion-icon name={icon}></ion-icon>
            </span>
            <span className="ml-2 text-white text-[12px]">{title}</span>
        </NavLink>
    )
}
export default SidebarMenuItem