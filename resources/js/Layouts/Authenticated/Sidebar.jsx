import { Link } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";
import { userMenu, userOthers } from "./MenuList";
import MenuItem from "./MenuItem";

export default function Sidebar({activePlan}) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href={route('prototype.dashboard')}>
                    <img src="/images/moonton.svg" alt=""/>
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="mb-4 text-sm text-gray-1">Menu</div>
                        {userMenu.map((menu,index) => (
                            <MenuItem
                                key={`${index}&${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={route().current() === menu.link}
                            />
                        ))}
                    </div>
                
                    <div>
                        <div className="mb-4 text-gray-1 side-link">Others</div>
                        {userOthers.map((menu,index) => (
                            <MenuItem
                                key={`${index}&${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={route().current() === menu.link}
                                method={menu.method}
                            />
                        ))}
                    </div>
                    
                    {activePlan && (
                        <SubscriptionDetail
                            name={activePlan.name}
                            activeDays={activePlan.activeDays}
                            remainingActiveDays={activePlan.remainingActiveDays}
                            isPremium={activePlan.name === 'Premium'}
                        />
                    )}
                </div>
            </div>
        </aside>
    )
}