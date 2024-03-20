import { HomeIcon, GamePadIcon, RouteIcon, Top10Icon, UserIcon } from "@/components";

export const Navbar = () => {
    
    return (
        <div>
            <nav className="flex flex-col h-screen w-72 p-2 gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 text-slate-300">

                <div><img src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="Logo EmersonBrogaDev" className="max-w-full p-2" /></div>

                <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">

                    <li className="group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-slate-800 hover:text-slate-100">
                        <HomeIcon className="w-4 h-4" /> Home
                    </li>

                    <li className="group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-slate-800 hover:text-slate-100">
                        <GamePadIcon className="w-4 h-4"/> Games
                    </li>

                    <li className="group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-slate-800 hover:text-slate-100">
                        <Top10Icon className="w-4 h-4"/> Top 10
                    </li>

                    <li className="group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-slate-800 hover:text-slate-100">
                        <RouteIcon className="w-4 h-4"/> Walkthroughs
                    </li>

                </ul>

                <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">

                    <li className="group my-2 rounded-lg bg-transparent p-2 cursor-pointer flex gap-1 items-center hover:bg-slate-800 hover:text-slate-100">
                        <UserIcon className="w-4 h-4" /> User
                    </li>

                </ul>

            </nav>
        </div>
    )
}