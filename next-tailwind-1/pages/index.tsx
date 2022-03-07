import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <p className="text-xs text-indigo-500">text-xs</p>
      <p className="text-sm text-blue-500">text-sm</p>
      <p className="text-lg text-purple-500">text-lg</p>
      <p className="text-xl text-green-500">text-xl</p>
      <p className="text-2xl text-gray-500">text-2xl</p>
      <p className="text-9xl text-red-500">text-9xl</p>
    </>
  );
};

export default Home;
