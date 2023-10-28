import { Link } from "@inertiajs/react";
import ReactPlayer from "react-player";

export default function Show({movie}) {
    return (
        <section className="relative w-screen h-screen mx-auto watching-page font-poppins bg-form-bg" id="stream">
            <div className="absolute z-20 top-5 left-5">
                <Link href={route('user.dashboard')}>
                    <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                </Link>
            </div>

            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="text-2xl font-medium text-white transition-all select-none drop-shadow-md">
                    {movie.name}
                </span>
            </div>
            <div className="pt-[85px]">
                <ReactPlayer
                    url={movie.video_url}
                    controls
                    width={'100%'}
                    height={'780px'}
                />
            </div>
        </section>
    )
}