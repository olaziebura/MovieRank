"use client";
import type { PopularMovie } from "@/app/api/types/movies";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/carousel";
import React from "react";
import { MovieCard } from "@/app/_components/MovieCardCarousel/MovieCard";

type PopularMoviesCarouselProps = {
  results: PopularMovie[];
};

const PopularMoviesCarousel = ({ results }: PopularMoviesCarouselProps) => {
  return (
    <Carousel
      className="mx-auto max-w-screen-xlg [&_.carousel-next]:hidden [&_.carousel-previous]:hidden [&_button[data-slot='carousel-previous']]:hidden"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 8000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {results.map((movie, idx) => (
          <CarouselItem
            key={idx}
            className="sm:basis-1/2 lg:basis-1/3 xlg:basis-1/3"
          >
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              voteCount={movie.vote_count}
              voteAverage={movie.vote_average}
              genres={movie.genre_ids}
              popularity={movie.popularity}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="hidden" />
    </Carousel>
  );
};

export default PopularMoviesCarousel;
