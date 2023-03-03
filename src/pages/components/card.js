import Link from "next/link";
import React, { useState } from "react";
import { data, kategori } from "data/data";

const Pricing = () => {
  const [skincare, setSkincare] = useState(data);

  const filter = (category) => {
    setSkincare(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-['Poppins'] ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Pick</span>
          </span>{" "}
          your favourite. Beauty and glow everyday.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="max-w-[1640px] m-auto px-4 pt-0 pb-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <p className="font-bold text-xl text-gray-700">Filter</p>
            <div className="flex justify-between flex-wrap rounded-lg">
              <button
                onClick={() => setSkincare(data)}
                className="m-1 text-black-600 hover:text-pink-600 px-2 py-2 "
              >
                All
              </button>
              {kategori.map((isi) => (
                <button
                  onClick={() => filter(isi.categories)}
                  className="m-1 text-black-600 hover:text-pink-600 px-2 py-2"
                >
                  {isi.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      

      <div className="grid max-w-md gap-4 row-gap-2 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
      
          {skincare.map((item, index) => (
            <Link
              key={index}
              href={`/${item.id}`}
              className="object-cover w-full h-full rounded-t"
            >
              
              <div className="relative w-full h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-2xl w-fit">
                <div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p className="text-sm text-gray-900">{item.description}</p>
                </div>

                <div className="mt-1 mb-4 mr-1 text-2xl font-bold sm:text-xl text-pink-600">
                  {item.price}
                </div>
                
              </div>
            </Link>
          ))}
          
      </div>
    </div>
  );
};
export default Pricing;
