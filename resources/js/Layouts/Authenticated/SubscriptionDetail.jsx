export default function SubscriptionDetail({name, isPremium, remainingActiveDays, activeDays}) {
    const remainingDays = activeDays - remainingActiveDays;

    const progressRemaining = () => {
        const progress = remainingDays / activeDays;
        const width = Math.min(Math.ceil(progress * 12), 12);
        return `w-${width}/12`;
    }
    
    return (
        <>
            {!isPremium ? (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                        <div className="mb-8 text-lg font-semibold text-black">
                            {name}
                        </div>
                        <div className="mb-2 text-sm text-black">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                            <div className={`h-full rounded-full bg-alerange ${progressRemaining}`}></div>
                        </div>
                    </div>
                </div>
            ):(
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <img src="/icons/ic_star-rounded.svg" alt=""/>
                        <div className="mt-4 mb-8 text-lg font-semibold text-white">
                            {name}
                        </div>
                        <div className="mb-2 text-sm text-white">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div className={`h-full rounded-full bg-alerange ${progressRemaining}`}></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}