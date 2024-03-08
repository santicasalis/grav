import { component$ } from "@builder.io/qwik";

export const HeroSection = component$(() => {
  return (
    <>
      <div
        class="mx-3  flex flex-col border border-borderColor sm:mx-20 "
        style="background-image: url('https://res.cloudinary.com/ddpmly8bf/image/upload/t_Gradient fade/v1709843526/f351145d-6e34-45cf-9a28-ff796e8bb7e9_igbijq.png'); "
      >
        <div class="  py-10">
          <h3 class="leading-1000 mx-8 mt-4 text-center font-barlow text-4xl font-semibold">
            The Only Full Service Growth Marketing Agency <br />
            Fueled By Neuroscience & Creative
          </h3>
        </div>
        <div
          class="mx-20 flex h-80   flex-col items-center justify-start bg-cover bg-center"
          style="background-image: url('https://res.cloudinary.com/ddpmly8bf/image/upload/v1709734152/Abstract_Design_lswpty.png');"
        >
          <div class=" my-1 flex flex-col rounded-lg bg-violet bg-opacity-70 p-7 font-barlow sm:flex-row ">
            <div class="m-1 p-2 text-grey">For</div>
            <div class="m-1 bg-violetDark  p-2 ">eCommerce Brands</div>
            <div class="m-1 p-2 text-grey">and</div>
            <div class="m-1 bg-violetDark p-2">B2B SaaS</div>
            <div class="m-1 p-2 text-grey">doing</div>
            <div class="m-1 bg-violetDark p-2">$1MM+</div>
            <div class="m-1 p-2 text-grey">in</div>
            <div class="m-1 bg-violetDark p-2">Annual Recurring Revenue</div>
          </div>
        </div>
        <div class=" flex  flex-col justify-center px-10 py-10 sm:flex-row">
          <button class="bg-btnservices  text-btnservice my-2 mr-2    rounded-lg p-3 px-5 font-barlow font-semibold">
            {" "}
            Services
          </button>
          <button class="my-2   rounded-lg bg-orange p-3 px-8   font-barlow font-semibold text-orangeFont">
            {" "}
            Work with Us
          </button>
        </div>
        <button
          class="mx-auto mb-[-20px] mt-8 rounded-full border border-borderColor p-6  font-barlow font-semibold "
          style="background: #1A1A1A;"
        >
          {" "}
          Trusted By 50+ Companies
        </button>
      </div>
    </>
  );
});
