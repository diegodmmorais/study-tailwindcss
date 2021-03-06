import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-indigo-500 hover:bg-blue-500">
        <h1 className="cursor-pointer p-10 text-center text-9xl font-bold italic text-white hover:font-light hover:underline">
          Bem-vindo!
        </h1>
      </div>
    </>
  );
};

export default Home;
