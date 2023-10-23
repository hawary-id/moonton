<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Batman the Movie',
                'slug' => 'batman-the-movie',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
                'thumbnail' => 'https://www.picsum.com/300/300',
                'rating' => 9.3,
                'is_featured' => true,
            ],
            [
                'name' => 'Captain Marvel',
                'slug' => 'captain-marvel',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
                'thumbnail' => 'https://www.picsum.com/300/301',
                'rating' => 9.2,
                'is_featured' => false,
            ],
            [
                'name' => 'Naruto Shippuden',
                'slug' => 'naruto-shippuden',
                'category' => 'Anime',
                'video_url' => 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
                'thumbnail' => 'https://www.picsum.com/300/301',
                'rating' => 9.0,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
