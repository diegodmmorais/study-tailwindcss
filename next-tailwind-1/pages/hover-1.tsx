const Hover = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <form className="mx-auto flex w-full max-w-sm space-x-3">
            <input
              className="w-full flex-1 appearance-none rounded-lg border border-transparent bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              placeholder="Your email"
            />
            <button
              className="shadow-lgfocus:ring-2 flex-shrink-0 rounded-lg bg-purple-600 py-2 px-4 text-base font-semibold text-white shadow-md hover:bg-purple-700  focus:outline-none focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="button"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hover;
