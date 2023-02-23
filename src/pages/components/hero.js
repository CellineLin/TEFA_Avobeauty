export const Header = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-40 md:px-0 bg-[url('/img/header.jpeg')] bg-fixed bg-center">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Avobeauty
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs></defs>
                  <rect
                    fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              for your beauty essentials
            </h2>
          </div>

          <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
            Discover more about Indonesian skincare products special designed to
            address your skin concerns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
