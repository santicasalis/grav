import { component$ } from "@builder.io/qwik";

export const Testimonials = component$(() => {
  return (
    <>
      <div
        class="text-violetLigth "
        style="background: linear-gradient(180deg, #29163E 40%, #1A1A1A 80%);"
      >
        <div class="grid grid-cols-1 gap-8  p-12 py-1  sm:grid-cols-2 sm:p-20">
          <div class="flex flex-col">
            <p class="my-3 text-navFont">What our customers say about us</p>
            <h3 class="text-violetLigth">
              A Partnership Built on Trust & Results
            </h3>
            <p class="my-3 text-navFont">
              Our partners stay on average 2+ years with us. No one can match
              our success rate
            </p>
          </div>
          <div style="position: relative;" class="hidden sm:block md:block">
            <img
              width="60"
              height="75"
              src="https://s3-alpha-sig.figma.com/img/5a80/c0e8/4e27e18416ee7763fb2930984b2b76c3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9Jv5jvYyivXiWjs2TwxgMTEKeTVO2jNE0Xr7uZ7~uka6ixSDW6DtApbWI2gHQlD0Z9vdTrsseqG~WndeFWXahNHn2--9ufLjiBIC1lSMMdxhtEaOnLsKFz-CWI9fzYGLDJeu2t7SOJ9XAfCT01FeIIYoMc2Xypg5Pq1wb9lUfbWU3RhDO6IMj0fMlzqLI654ztQAj2Fre0gBo~7f9OH~dA2sc68uOeUhCnzq71dMY8nYGW~jNDxeF0X0a~ufoeuFLttxKJEnyE4JTxkXUAiiPxeLW5lXJzrS3zOq3Q-7LfIGXRKxjSX~FMW9jP~60wU6a4RqHd6OkWlfqnuoQp2Lw__"
              alt=" Google"
              style="position: absolute; top: 180px; right:230px "
            />

            <img
              width="60"
              height="60"
              src="https://s3-alpha-sig.figma.com/img/dde3/7f47/ed629573cc2fd04307504c5c0c80e540?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxClrQd6~H8X78W2mz9khCC-q9FS8SY~Agl02GsUBUTulndtboTQt~W9F6lK-g2OYGgN4GEgqAgAzaZHlTkEfHBgbrA7~eLNqT4lnN-2QPm56G2RQaujeJsJSCMCVQp3i7cMKpv6cCpI6d24o6mOMigGR7CN2PFJy1510IjWC5xfJQdub-38qqENTK9GgXgC45f25W7i1NTxa9-A9eohM6GDPMnlVeG-WetfhMAEnP1UmD4dfQEiO5GWCS-5POdZpi652KOXURLkAWROWR9OSLEU1frTbeJ2e2oVV13RUNpmb3teBPkHp1PbdHE14LqSVj2mpy5dyAVuKL4nBoK24Q__"
              alt="Shopify"
              style="position: absolute; top: 130px; right:350px "
            />

            <img
              width="80"
              height="78"
              src="https://s3-alpha-sig.figma.com/img/83e0/d75f/37a91ec16bafacdb989a8f8bc8d02a1c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-lgqRuNdAwhQfzWVgMPzXIe6hmRP9Vw8sc907gDZb5U787wsVu1iNb57XK24J5s7UJHtspHXNuaDA4pS-8Shs5mb~ZXg~aurGF5o2a6pW9g~iBGj4GdWbwW3jdK3ktrZT~29C7LXmpLppZB5dW-fAlIik21av4lS0T~IOOgnu3qn430huM5Cpz8WERPCejCnMDqNjh0cO2CZ8jbsm17NyGsPT7igFBghtjr4vwMdgn9U0P1yha81whYTdhjwOEt6ssg7qAi72xJ0rDawW0VOOU6V4R-WlHJELawzlkMqhFCsYwbYHkdDsbisDW1nd1pzUMcdPoPaR~rlnithRviEA__"
              alt="Adobe"
              style="position: absolute; top: 20px; right:250px "
            />

            <img
              width="70"
              height="46"
              src="https://s3-alpha-sig.figma.com/img/d3d6/1828/72a71e3d15dd09dbbb823ae2bb0564da?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FMs2UVn4iNJVseyEjsN3peh-avv0LI5jUMfgQw-tmMRXpHWsqBt1kCj~2dg9ZGSvw0VvDNxnG0Nele4yZAB2tBdVJSS6Arvsgx7COZ2kgf1LG~WR33Ahq1G2XI0K8747LyURhyrMJVXkhOtVasPgG1BgKNaSc-GQVMWL3wgNvzL~ymugA7zQh-WGedX57w-UutygKqvhtIdY8iQ9zJogYNQewGF8SfShuCItPzRsfxP5Ls99YAxp0n6b8wOdPUz-WMHrV~SY3EmhwfAvM-ukErG41qn0wIy~5KHnvENV25RG5ZgySkd1N9Jzu1vf2krdg-QN5Ar2xBb7TukWrjk0yA__"
              alt="Meta"
              style="position: absolute; top: 10px; right:50px "
            />

            <img
              width="180"
              height="227"
              src="https://s3-alpha-sig.figma.com/img/ea9c/4c0b/dfbb76c302f641f0f6de01b80d0aa2cb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P01fBV8zV~4hGNLmDnrE-7ti7Ben3zo7k4Wub29pvcpnLoP0uWszE7z9ep3fFOFBGaNPuoYAaXgvthupin~Ynq7aY5dFYgIW6l7Fy2cBIipJKP3FwwZHVTZ4QOXeCWevoOoHL6nJfxQZpTEVVogcpqpaQ072-sSnhqLrtipGRoyuDKUXnrsOdOIMBHocFpxnNIFNzUb-jXbAqm~c3HLA0UEJd4LODB8hluvpjqfflwTptaaTK87TSFy9nCa3QrdRji0wFtbJzSFCJixhPAmOLyBMnWLl-sTI3zfUzhzc~uHA3-RI0iaNlweGEUh6VVk7TKBmFkYgdeN2TVHhGgx6Wg__"
              alt="Rocket"
              style="position: absolute; top: 20px; right:60px "
            />
          </div>
        </div>

        <div class="mt-1 grid grid-cols-1 gap-8 sm:mt-2 sm:grid-cols-2">
          <div class="border-borderColor flex flex-col border  p-8 py-3">
            <h4 class="text-28 mb-2 mt-5 font-medium leading-8">
              SquareUp has been Instrumental in Transforming our Online
              Presence.{" "}
            </h4>
            <p class="text-15 mb-12 leading-5 text-navFont">
              Their team's expertise in web development and design resulted in a
              visually stunning and user-friendly e-commerce platform. Our
              online sales have skyrocketed, and we couldn't be happier.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/ee37/1610/fc27e5b342678e8904c0f9f3ffdb8566?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrDc2wsOqelD3pPhCFFsHezZB1FX4pYX4NeXIJXEoerQvKapeujPcKp0z8dBFPWWD5kNxOcm6ebwGzjJsSNDzcLueD8PG7knY0P4AGh8NqMmFMlAYxg2hl6hK929lBZYb5SO4iq0AKylSQUSnvmWhgwBM5fl2B7mpdnyFDM00AYaaai8UOdoLQuCSSY7zQBuyAO9rlbBoy0jwfgWQnKE3Rk6lZf7MXj7c4G0O~iFz5ZLtjImXQdaCW-icyOykrZhTQtp~5-Qz-GiYxbltNZqv~Ln0il~NhAFVy5GHw3Q3IEmTkZoRlO1lTv9KZq9Jx-dtN24~ZlkbdcUTe8z-0lu4g__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>John Smith</div>
                  <div>CEO of Chic Boutique</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
          <div class="border-borderColor flex flex-col border  p-8 py-3">
            <h4 class="text-28 mt-5 font-medium leading-8">
              Working with SquareUp was a breeze.
              <br />
            </h4>
            <p class="text-15 mb-10 leading-5 text-navFont">
              They understood our vision for a mobile app that streamlined our
              food delivery service. The app they delivered exceeded our
              expectations, and our customers love the seamless ordering
              experience. SquareUp is a trusted partner we highly recommend.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/13ed/f82b/a436cc2c3eb4d7e4159495ca442ec5cc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0W2Ck-fXHlt7mD1ETweXZ3USJusnGykkNu6o8WTX1ydpYSyFLBcJpZCDp9cZLVwhutNjkbceq5WtGAtoRpxpxWh5IZiUnPUysiMcktjRbTtjNyMH9w6BE2A~U8Y37tSZkuOhwhLgg8fR32qC3AXuijb7~QFjb~ZpSK96C5Rddmpt1b8fcb7gQrlBkToU4R7xVNtLgACc3MB2ebO5i4HiPM~dgP7K6U6A177O2LZwZAp3VjQ-nb34G8PPE67YQHAZWrIpacu0U03-egbqgBhA0It1WR5zluU7O6KSvSK2oSUhFThgim~krctPzn26bwgnprPg815-jS~6m9CeiaoyA__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>Sarah Johnson</div>
                  <div>Founder of HungryBites.</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
          <div class="border-borderColor flex flex-col border  p-8 py-3">
            <h4 class="text-28 mb-2 mt-5 font-medium leading-8">
              SquareUp developed a comprehensive booking and reservation system
              for our event management company
            </h4>
            <p class="text-15 mb-12 leading-5 text-navFont">
              Their attention to detail and commitment to delivering a
              user-friendly platform was evident throughout the project. The
              system has streamlined our operations and enhanced our clients'
              event experiences.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/a151/ae71/91280caf2dc2f20ce3f49a6974743500?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqeZDapEvVnfI0abXHDBiDjkI5kD9B491SQQiuqFyBViTeBvBq34UAnB8d2SKCtRm3FWbxyIY35K95Wyvp7aXbdve9MS1H6oVUDbXEHZcHTkmXB0PO1gXtwjFNF2qBeb83YdS8UirCXQKl4pwm-hdpgwOJCwiAin3Gq6-NP4Yv0zLeCmEGYbqPqhz32KG1qWw-0wBd4IgiCLcZprVY6vuM0rYbXZ8VJi6GeWI-WOslx6KoPN4Jo~j20TEt8xfgq4WRvgrzO5cLPAMS7RyfRqkvYlu9JAZ8jDHDf2bDJ9qxL~ItGMUoRD1evFuXuebzJ602XbJHPLSLZMMeFLMgHroQ__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>Mark Thompson</div>
                  <div>CEO of EventMasters</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
          <div class="border-borderColor flex flex-col border  p-8 py-3">
            <h4 class="text-28 mb-2 mt-5 font-medium leading-8">
              ProTech Solutions turned to SquareUp to automate our workflow
            </h4>
            <p class="text-15 mb-12 leading-5 text-navFont">
              They delivered an exceptional custom software solution. The system
              has significantly increased our productivity and reduced manual
              errors. SquareUp's expertise and professionalism have made them a
              trusted technology partner.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/a24d/0752/f02044c9083554ecaa5e03e61b43451b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP0J~wjoEyJEIdX7UV0MHaVJr0DS0YzigAkVacUZ4VqtHb2CYzmB3b8Raq8~bLpTUWm76Jp6Ej7MCDdHAaDnYBdeg3GSkKcRUOyQiqhyAiW4snEw7fsrvITvjMTh6PLX7VAguiL-hW6OhMmQBZUAip0AhQhs0yJKyNwHrGfBgFlcZmC14pGDueO7K-~PJo8goZd489ZM4X2Dl97Wa5DoeStLfqgyaHMbWvT5ouwn8Nwu9Wku2k49zdlS4mE-msz2Hv7cci5iaWoFkQs3yTMMa4C-O513yFgkxUxYKGMf~lPdmY6PQvzWVvTaCgDJ1fkDq4yi1D0W175Q4et3nsseqA__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>Laura Adams</div>
                  <div>COO of ProTech Solutions.</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
