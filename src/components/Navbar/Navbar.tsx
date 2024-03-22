import { HomeIcon, GamePadIcon, RouteIcon, Top10Icon, UserIcon } from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";

export const Navbar = ({ className, ...props }: NavbarProps) => {

    return (

        <nav className={cn("flex flex-col h-screen w-72 p-2 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 text-slate-300", className)} {...props} >

            <div className="flex items-center justify-center my-4">
                <img src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="Logo EmersonBrogaDev" className="w-auto h-12 p-2" />
            </div>

            <NavbarList className="grow">
                <NavbarListItemLink href="/">
                    <HomeIcon className="w-4 h-4" /> Home
                </NavbarListItemLink>
                <NavbarListItemLink href="/games">
                    <GamePadIcon className="w-4 h-4" /> Games
                </NavbarListItemLink>
                <NavbarListItemLink href="/top-10">
                    <Top10Icon className="w-4 h-4" /> Top 10
                </NavbarListItemLink>
                <NavbarListItemLink href="/walkthroughs">
                    <RouteIcon className="w-4 h-4" /> Walkthroughs
                </NavbarListItemLink>
            </NavbarList>

            <NavbarList>
                <NavbarListItemLink href="/user">
                    <UserIcon className="w-4 h-4" /> User
                </NavbarListItemLink>
            </NavbarList>

        </nav>

    )
}