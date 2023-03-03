import { data } from "data/data";
import React, { useEffect, useState, useRef } from "react";
import { Router, useRouter } from "next/router";
import Nav from "../components/navbar";
import Minus from "../components/min";
import Plus from "../components/plus";
import { UilShoppingCart } from '@iconscout/react-unicons'


function getProduct(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {

  const router = useRouter();
  const { id } = router.query;

  const skincare = getProduct(id);

  if (Object.keys(skincare).length === 1) {
    return <div>Item not found</div>;
  }

  // const {cartCount, addItem} = useShoppingCart();
  const [qty, setQty] = useState(1);
  // const [adding, setAdding] = useState(false);

  // const toastId = useRef();
  // const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? "s" : ""}...`
    );
    addItem(props, qty);
  };


  return (
    <>
      <Nav
      />
      <div className="container lg:max-w-screen-lg mx-auto py-14 px-6 font-['Poppins']">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 mb-4 my-4">
            <img
              src={skincare.image}
              alt={skincare.name}
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-lg h-full border-green rounded-md shadow-lg p-6 mt-80">
            <h2 className="text-3xl font-semibold">{skincare.name}</h2>
 
            <p className="mt-4">{skincare.description}</p>

            {/* Price */}
            <div className="mt-8 border-t pt-4">
              <p className="text-green text-xl font-bold">
                {skincare.price}
              </p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500">Quantity:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-pink-100 hover:text-pink-500 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
              <button
                class="flex items-center my-4  px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green rounded-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80"
  
                onClick={handleOnAddToCart}
                
                disabled
              >
                <UilShoppingCart/>
                Add to cart ({qty})
           
              </button>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
