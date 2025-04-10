import PopularMoviesCarousel from "./_components/home/sections/PopularMoviesCarousel/PopularMoviesCarousel";
import { popularMovies } from "./api/mockedData/popularMovies";

const Home = async () => {
  const { results } = popularMovies;
  return (
    <section className="max-w-screen-xlg mx-auto">
      <div className="relative w-full overflow-hidden pb-6 px-6 rounded-2xl">
        <h3 className="text-left text-4xl font-bold py-6 text-neutral-800">
          See top 10 popular Movies of last days
        </h3>
        <PopularMoviesCarousel results={results} />
        <div className="w-[1000px] h-full absolute bg-accent-100 transform -rotate-45 -z-10 -right-90 -bottom-58" />
        <div className="w-[1000px] h-full absolute bg-accent-100 transform -rotate-45 -z-10 -left-90 -top-58" />
      </div>
    </section>
  );
};

export default Home;
