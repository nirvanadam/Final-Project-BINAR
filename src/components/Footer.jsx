import React from "react";

function Footer() {
  return (
    <div className="bg-zinc-800 flex flex-col mt-20 p-3 pb-36 lg:p-10 font-quickSand">
      {/* Level 1 */}
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-5 ">
        {/* App Logo */}
        <h1 className="lg:order-2 text-white text-xl lg:text-3xl font-bold">
          Quick<span className="text-secondary">Tix</span>
        </h1>
        {/* App Logo End */}

        {/* Payment Logo */}
        <div className="lg:order-3 flex flex-col gap-3">
          <h1 className="lg:hidden text-base text-white font-semibold">Payment Partners</h1>
          <div className="flex flex-col lg:flex-row gap-3">
            <img src="/images/paypal-logo.svg" alt="" className="w-7 lg:grayscale transition-all duration-200 hover:grayscale-0" />
            <img src="/images/visa-logo.svg" alt="" className="w-7 lg:grayscale transition-all duration-200 hover:grayscale-0" />
            <img src="/images/mastercard-logo.svg" alt="" className="w-7 lg:grayscale transition-all duration-200 hover:grayscale-0" />
          </div>
        </div>
        {/* Payment Logo End */}

        {/* Social Media Logo */}
        <div className="lg:order-1 flex flex-col lg:flex-row  gap-5">
          <h1 className="lg:hidden text-base text-white font-semibold">Follow Us On</h1>
          <div className="flex items-center gap-3">
            <img src="/images/twitter-logo.svg" alt="" className="w-5 lg:grayscale transition-all duration-200 hover:grayscale-0" />
            <h1 className="lg:hidden text-xs text-white font-semibold">Twitter</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/instagram-logo.svg" alt="" className="w-5 lg:grayscale transition-all duration-200 hover:grayscale-0" />
            <h1 className="lg:hidden text-xs text-white font-semibold">Instagram</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/linkedin-logo.svg" alt="" className="w-5 lg:grayscale transition-all duration-200 hover:grayscale-0" />
            <h1 className="lg:hidden text-xs text-white font-semibold">Linkedin</h1>
          </div>
        </div>
        {/* Social Media Logo End */}
      </div>
      {/* Level 1 End */}

      <span className="hidden lg:block h-[1px] my-8 w-full bg-zinc-600"></span>

      {/* Level 2 */}
      <div className="mt-6 flex flex-col lg:item gap-3">
        <h1 className="lg:hidden text-base text-white font-semibold">About QuickTix</h1>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-2 lg:gap-10 text-sm text-zinc-600 font-medium lg:font-bold lg:uppercase ">
          <a href="#" className="transition-all hover:text-white ">
            How to Book
          </a>
          <a href="#" className="transition-all hover:text-white">
            About Us
          </a>
          <a href="#" className="transition-all hover:text-white">
            Help Center
          </a>
          <a href="#" className="transition-all hover:text-white">
            Contact Us
          </a>
          <a href="#" className="transition-all hover:text-white">
            Installment
          </a>
        </div>
      </div>
      {/* Level 2 End */}

      {/* Level 3 */}
      <h1 className="mt-10 text-zinc-500 text-sm text-left lg:text-center font-medium">Copyright© 2023 Team 3. All right reserved</h1>
      {/* Level 3 End */}
    </div>
  );
}

export default Footer;
