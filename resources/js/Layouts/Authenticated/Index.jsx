import { usePage } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Authenticated({children}) {
    const { props } = usePage();
    return (
        <>
            <div className="hidden mx-auto max-w-screen lg:block">
                <Sidebar activePlan={props.auth.activePlan}/>

                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        <Topbar name={props.auth.user.name}/>
                        <main className="">{children}</main>
                    </div>
                </div>
                
            </div>
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    )
}