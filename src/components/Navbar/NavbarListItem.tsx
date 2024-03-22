import { cn } from "@/helpers/cn"
import { NavbarListItemProps } from "./types"

export const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
    return (
        <li className={cn("group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-2 items-center hover:bg-indigo-400/40 hover:text-slate-100", className)} {...props}>
            {children}
        </li>

    )
}