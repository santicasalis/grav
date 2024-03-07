import { component$ } from "@builder.io/qwik";

export const WhyChooseUs = component$(() => {
  return (
    <>
      <div class="mt-10">
        <div class="flex flex-col text-center font-barlow">
          <h3 class="leading-14 text-center text-4xl font-semibold tracking-normal">
            Why Choose NeuroCreativeLab?
          </h3>
          <p class="mt-3 text-sm">
            A team of performance and growth marketers with 50+ years of
            experience combined
          </p>
        </div>

        <div
          class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2"
          style="background: linear-gradient(180deg, #1A1A1A 23%, #29163E 75%);"
        >
          <div class="border-borderColor flex flex-col border p-6 sm:p-12">
            <div class=" flex items-center">
              {" "}
              <img
                width="30"
                height="30"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709756314/Icon_nyyb5w.png"
                alt=""
                class="mr-3"
              />
              <h4>Expertise</h4>
            </div>
            <div class="mx-4 ml-1 mt-4 text-sm">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </div>
          </div>

          <div class="border-borderColor flex flex-col border p-6 sm:p-12">
            <div class="flex items-center">
              {" "}
              <img
                width="30"
                height="30"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709756363/Icon_idxrsw.png"
                alt=""
                class="mr-3"
              />
              <h4>Client-Centric Approach</h4>
            </div>
            <div class="mx-4 ml-1 mt-4 text-sm">
              We prioritize our clients and their unique needs. We listen to
              your ideas, challenges, and goals, and tailor our services to meet
              your specific requirements. Your success is our success.
            </div>
          </div>

          <div class="border-borderColor flex flex-col border p-6 sm:p-12">
            <div class="flex items-center">
              {" "}
              <img
                width="30"
                height="30"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709756409/Icon_rfrnjn.png"
                alt=""
                class="mr-3"
              />
              <h4>Results-Driven Solutions</h4>
            </div>
            <div class="mx-4 ml-1 mt-4 text-sm">
              Our primary focus is on delivering results. We combine creativity
              and technical expertise to create digital products that drive
              business growth, enhance user experiences, and provide a
              competitive advantage.
            </div>
          </div>

          <div class="border-borderColor flex flex-col border p-6 sm:p-12">
            <div class="flex items-center">
              {" "}
              <img
                width="30"
                height="30"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709756470/Icon_er4ajf.png"
                alt=""
                class="mr-3"
              />
              <h4>Collaborative Partnership</h4>
            </div>
            <div class="mx-4 ml-1 mt-4 text-sm">
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
