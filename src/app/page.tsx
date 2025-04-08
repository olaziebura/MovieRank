const Home = async () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        Main Pallete colors:
        <div className="flex flex-col gap-24">
          <p className="text-peach-300">300: #FFBFB5</p>
          <p className="bg-blue-500">300: #D6A7C1</p>
          <p className="text-peach-300">500: #8275D85</p>
          <p className="text-peach-300">500: #3E4BEB</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
