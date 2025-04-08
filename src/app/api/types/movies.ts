export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
}

// Typy odpowiedzi z endpointu /movies
export interface MoviesResponse {
  movies: Movie[];
  total_items: number;
}
