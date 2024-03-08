import { component$ } from "@builder.io/qwik";

export const WhyChooseUs = component$(() => {
  return (
    <>
      <div class="mx-5 mt-10 sm:mx-20">
        <div class="flex  flex-col text-center font-barlow">
          <h3 class="leading-14 text-center text-4xl font-semibold tracking-normal ">
            Why Choose NeuroCreativeLab?
          </h3>
          <p
            class="mx-4 mt-3 font-barlow  "
            style=" font-size: 15px; letter-spacing: -0.066em; text-align: center;"
          >
            A team of performance and growth marketers with 50+ years of
            experience combined
          </p>
        </div>

        <div
          class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2"
          style="background: linear-gradient(180deg, #1A1A1A 23%, #29163E 75%);"
        >
          <div class="flex flex-col border border-borderColor p-6 sm:p-12 ">
            <div class=" flex items-center">
              {" "}
              <img
                width="50"
                height="50"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709848920/Icon_vvg9js.png"
                alt=""
                class="mr-3"
              />
              <h4
                class=" text-btnservice font-barlow text-xl "
                style="color: #ffffff;"
              >
                Expertise
              </h4>
            </div>
            <div class="ml-1 mt-4 font-barlow text-lg" style="color: #E6E6E6;">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </div>
          </div>

          <div class="flex flex-col border border-borderColor p-6 sm:p-12">
            <div class="flex items-center">
              {" "}
              <img
                width="50"
                height="50"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709756363/Icon_idxrsw.png"
                alt=""
                class="mr-3"
              />
              <h4
                class=" text-btnservice font-barlow text-xl "
                style="color: #ffffff;"
              >
                Client-Centric Approach
              </h4>
            </div>
            <div class="ml-1 mt-4 font-barlow text-lg" style="color: #E6E6E6;">
              We prioritize our clients and their unique needs. We listen to
              your ideas, challenges, and goals, and tailor our services to meet
              your specific requirements. Your success is our success.
            </div>
          </div>

          <div class="flex flex-col border border-borderColor p-6 sm:p-12">
            <div class="flex items-center">
              {" "}
              <img
                width="50"
                height="50"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709756409/Icon_rfrnjn.png"
                alt=""
                class="mr-3"
              />
              <h4
                class=" text-btnservice font-barlow text-xl "
                style="color: #ffffff;"
              >
                Results-Driven Solutions
              </h4>
            </div>
            <div class="ml-1 mt-4 font-barlow text-lg" style="color: #E6E6E6;">
              Our primary focus is on delivering results. We combine creativity
              and technical expertise to create digital products that drive
              business growth, enhance user experiences, and provide a
              competitive advantage.
            </div>
          </div>

          <div class="flex flex-col border border-borderColor p-5 sm:p-12">
            <div class="flex items-center">
              {" "}
              <img
                width="50"
                height="50"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709848984/Icon_u6nxs1.png"
                alt=""
                class="mr-3"
              />
              <h4
                class=" text-btnservice font-barlow text-xl "
                style="color: #ffffff;"
              >
                Collaborative Partnership
              </h4>
            </div>
            <div class="ml-1 mt-4 font-barlow text-lg" style="color: #E6E6E6;">
              We value long-term relationships with our clients. We see
              ourselves as your digital partner, providing ongoing support,
              maintenance, and updates to ensure your digital products continue
              to thrive.
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
