import { component$ } from "@builder.io/qwik";

export const HeroSection = component$(() => {
  return (
    <>
      <div
        class="border-borderColor mx-10 flex flex-col border"
        style="background-image: url('https://s3-alpha-sig.figma.com/img/f4fd/d2a2/3aecc907f995d84427b3721050e3a086?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WnM4Kw3wgm~2VZG1fGU0RL-TNaWYoYmZbjF~~oY5~vDNHgjiPoBmB82YtDogFkzyo8ZwyJMl7nmUJ0op3WTwBeaPBsxmy4cIBsJ-HoLLiwPEA5kxZqu19aSfUBQ0yHIU1Io5OnmZ9Pcz7Bv8RSdSOUO~rbRHhCBMyjVtdWTiHw67O-~YNbka3x4eIDupS8F7pIB9fCuoSG5gEX6JK0i-QNbXPX0W4SqJgDIf-HP7BSlI7zOcYdt6tppcsgrW8Hnl9-zRLlQFPYF0bc4eLLfqyaHn53ZLSqKZDs1rZq2EtOnEJtXY2m~Mkh4HBbuiHthy1fkKKi-1mhqhJMlrWaywGQ__');"
      >
        <div class="mx-10 py-10">
          <h3 class="mt-10 text-center font-barlow">
            The Only Full Service Growth Marketing Agency Fueled By Neuroscience
            & Creative
          </h3>
        </div>
        <div
          class="mx-20 flex h-80   flex-col items-center justify-start bg-cover bg-center"
          style="background-image: url('https://res.cloudinary.com/ddpmly8bf/image/upload/v1709734152/Abstract_Design_lswpty.png');"
        >
          <div class="bg-violet my-6 flex flex-col p-7 sm:flex-row">
            <div class="text-grey m-1">For</div>
            <div class="bg-violetDark m-1  ">eCommerce Brands</div>
            <div class="text-grey m-1">and</div>
            <div class="bg-violetDark m-1">B2B SaaS</div>
            <div class="text-grey m-1">doing</div>
            <div class="bg-violetDark m-1">$1MM+</div>
            <div class="text-grey m-1">in</div>
            <div class="bg-violetDark m-1">Annual Recurring Revenue</div>
          </div>

          <div class="flex flex-col  justify-center sm:flex-row">
            <button class="my-2  mr-2  rounded-lg bg-gray-800    p-3 px-5 font-barlow text-white">
              {" "}
              Services
            </button>
            <button class="my-2  rounded-lg bg-orange p-3    px-7 font-barlow text-orangeFont">
              {" "}
              Work with Us
            </button>
          </div>
        </div>
        <button class="border-borderColor bg-bgColor mx-auto  mb-[-20px] mt-8 rounded-2xl border p-4 ">
          {" "}
          Trusted By 50+ Companies
        </button>
      </div>
    </>
  );
});
