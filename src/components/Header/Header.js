import React from 'react';
import bd from '../../images/bd-nature.jpg';

const Header = () => {
    return (
        <div>
            <section class="text-gray-600 body-font bg-green-400">
  <div class="container px-5 py-5 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"> WELCOME TO SEE THE BEAUTY OF BANGLADESH</h1>
      <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Visit</button>
    </div>
  </div>
</section>
            <section class="text-gray-600 body-font">
  <div class="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-4xl">
    <div class=" mx-auto">
      <div class=" h-90 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={bd} />
      </div>
      <h1 class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900"> THE NATURAL BEAUTY OF BANGLADESH</h1>
    </div>
  </div>
</section>
        </div>
    );
};

export default Header;