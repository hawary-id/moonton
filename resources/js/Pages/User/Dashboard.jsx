import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashbaord(props) {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (
        <Authenticated auth={props.auth}>
            <Head>
                <title>Dashboard</title>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div className="mb-12">
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px] __scroll-selector" options={flickityOptions}>
                    {props.featuredMovies.map((featureMovie) => (
                        <FeatureMovie
                            key={featureMovie.slug}
                            slug={featureMovie.slug}
                            name={featureMovie.name}
                            category={featureMovie.category}
                            rating={featureMovie.rating}
                            thumbnail={featureMovie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>

            <div>
            <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                <Flickity className="__scroll-selector" options={flickityOptions}>
                    {props.movies.map((featureMovie) => (
                        <MovieCard
                            key={featureMovie.slug}
                            slug={featureMovie.slug}
                            name={featureMovie.name}
                            category={featureMovie.category}
                            thumbnail={featureMovie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    )
}