import type { PopularMovie } from "@/app/api/types/movies";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/card";
import { Eye, Star, ThumbsUp } from "lucide-react";

export const MovieCard = ({
  title,
  overview,
  voteCount,
  voteAverage,
  popularity,
}: {
  title: PopularMovie["title"];
  overview: PopularMovie["overview"];
  voteCount: PopularMovie["vote_count"];
  voteAverage: PopularMovie["vote_average"];
  genres: PopularMovie["genre_ids"];
  popularity: PopularMovie["popularity"];
}) => {
  return (
    <Card className="h-full justify-between bg-neutral-800 text-white rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-accent-300">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-neutral-50 mt-3 line-clamp-3">
          {overview}
        </CardDescription>
      </CardHeader>
      <CardContent className="border-t border-neutral-700 pt-4">
        <div className="flex justify-around text-accent-500">
          <div className="flex gap-2 items-center">
            <Star />
            <span>{voteAverage}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Eye />
            <span>{voteCount}</span>
          </div>
          <div className="flex gap-2 items-center">
            <ThumbsUp />
            <span>{popularity}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
