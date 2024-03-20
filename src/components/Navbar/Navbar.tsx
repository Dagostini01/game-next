import { HomeIcon, GamePadIcon, RouteIcon, Top10Icon, UserIcon } from "@/components";
import { cn } from "@/helpers/cn";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;

const NavbarList = ({children, className, ...props}:NavbarListProps) => {
    return(
        <ul className={cn("flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
            {children}
        </ul>

    )
}

const NavbarListItem = ({children, className, ...props}:NavbarListItemProps) => {
    return(
        <li className={cn("group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-indigo-400/40 hover:text-slate-100", className)} {...props}>
            {children}
        </li>

    )
}

export const Navbar = (props:NavbarProps) => {

    return (
        <nav className="flex flex-col h-screen w-72 p-2 gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 text-slate-300" {...props}>

            <div className="flex items-center justify-center my-4">

                <img src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="Logo EmersonBrogaDev" className="w-auto h-12 p-2" />
            </div>

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