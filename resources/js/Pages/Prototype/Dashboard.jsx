import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashbaord(second) {
    const featureMovies = [
        {
            slug: 'the-shawshank-redemption',
            name: 'The Shawshank Redemption',
            category: 'Drama',
            rating: 9.3,
            thumbnail: 'https://picsum.photos/600/700',
        },
        {
            slug: 'the-godfather',
            name: 'The Godfather',
            category: 'Crime',
            rating: 9.2,
            thumbnail: 'https://picsum.photos/600/701',
        },
        {
            slug: 'the-dark-knight',
            name: 'The Dark Knight',
            category: 'Action',
            rating: 9.0,
            thumbnail: 'https://picsum.photos/600/702',
        },
        {
            slug: 'pulp-fiction',
            name: 'Pulp Fiction',
            category: 'Crime',
            rating: 8.9,
            thumbnail: 'https://picsum.photos/600/703',
        },
        {
            slug: 'fight-club',
            name: 'Fight Club',
            category: 'Drama',
            rating: 8.8,
            thumbnail: 'https://picsum.photos/600/704',
        },
    ]
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
        <Authenticated>
            <Head>
                <title>Dashboard</title>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div className="mb-12">
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px] __scroll-selector" options={flickityOptions}>
                    {featureMovies.map((featureMovie) => (
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
                    {featureMovies.map((featureMovie) => (
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