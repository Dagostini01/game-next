import { HomeIcon, GamePadIcon, RouteIcon, Top10Icon, UserIcon } from "@/components";

const NavbarList = ({children, className}) => {
    return(
        <ul className={`flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40} ${className} `}>
            {children}
        </ul>

    )
}

const NavbarListItem = ({children, className}) => {
    return(
        <li className={`group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-indigo-400/40 hover:text-slate-100} ${className}`}>
            {children}
        </li>

    )
}

export const Navbar = () => {

    return (
        <nav className="flex flex-col h-screen w-72 p-2 gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 text-slate-300">

            <div className="flex items-center justify-center my-4">

                <img src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="Logo EmersonBrogaDev" className="w-auto h-12 p-2" /></div>

            <NavbarList className={"flex-grow"}>
                <NavbarListItem>
                    <HomeIcon className="w-4 h-4" /> Home
                </NavbarListItem>
                <NavbarListItem>
                    <GamePadIcon className="w-4 h-4" /> Games
                </NavbarListItem>
                <NavbarListItem>
                    <Top10Icon className="w-4 h-4" /> Top 10
                </NavbarListItem>
                <NavbarListItem>
                    <RouteIcon className="w-4 h-4" /> Walkthroughs
                </NavbarListItem>
            </NavbarList>

            <NavbarList>
                <NavbarListItem>
                    <UserIcon className="w-4 h-4" /> User
                </NavbarListItem>
            </NavbarList>

        </nav>
    )
}