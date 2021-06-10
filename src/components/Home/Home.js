import React from 'react';
import tea from '../../images/sylhet-01.jpg';
import haor from '../../images/t-howr-01.png';
import kaptai from '../../images/kaptai-lake.jpg';

const Home = () => {
    return (
        <div class="">
            <div class="m-5"> 
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-70 w-full object-cover md:h-full md:w-60" src={tea} alt="Man looking at item at a store" />
                    </div>
                    <div class="p-6">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                        <a href="https://mahfuz-antor.web.app/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The beautiful place Sylhet of Bangladesh</a>
                        <p class="mt-2 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aut beatae ducimus provident, vero nam enim, ipsa maxime deleniti mollitia pariatur ex earum totam perferendis itaque quidem architecto repellat suscipit dignissimos cupiditate delectus! Ex ad nam, nobis tenetur aut facilis..</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="m-5"> 
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-70 w-full object-cover md:h-full md:w-60" src={haor} alt="Man looking at item at a store" />
                    </div>
                    <div class="p-6">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                        <a href="https://mahfuz-antor.web.app/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The beautiful place Sylhet of Bangladesh</a>
                        <p class="mt-2 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aut beatae ducimus provident, vero nam enim, ipsa maxime deleniti mollitia pariatur ex earum totam perferendis itaque quidem architecto repellat suscipit dignissimos cupiditate delectus! Ex ad nam, nobis tenetur aut facilis.</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="m-5"> 
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-70 w-full object-cover md:h-full md:w-60" src={kaptai} alt="Man looking at item at a store" />
                    </div>
                    <div class="p-6">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                        <a href="https://mahfuz-antor.web.app/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"> The beautiful place Rangamaty of Bangladesh</a>
                        <p class="mt-2 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aut beatae ducimus provident, vero nam enim, ipsa maxime deleniti mollitia pariatur ex earum totam perferendis itaque quidem architecto repellat suscipit dignissimos cupiditate delectus! Ex ad nam, nobis tenetur aut facilis.</p>
                    </div>
                </div>
            </div>
            </div>
            
           
        </div>
    );
};

export default Home;