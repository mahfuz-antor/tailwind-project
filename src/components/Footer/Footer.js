import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="text-gray-600 align-middle text-center body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col text-center">
                    <a href="https://mahfuz-antor.web.app/" class="flex title-font font-medium items-center md:justify-center justify-center text-gray-900 text-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span class="ml-3 text-center text-xl">BANGLADESH</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">© 2021 BANGLADESH —
      <a href="https://mahfuz-antor.web.app/" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">MAHFUZ-ANTOR</a>
                    </p>
    
                </div>
            </footer>
        </div>
    );
};

export default Footer;