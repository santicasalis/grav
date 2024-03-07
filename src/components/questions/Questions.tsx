import { component$ } from "@builder.io/qwik";

export const Questions = component$(() => {
  return (
    <>
      <div
        style="background: linear-gradient(180deg, #1A1A1A 26.5%, #29163E 74%); "
        class="flex flex-col items-center justify-center"
      >
        <h3 class="mx-8 mt-8 text-center" style="font-weight: 800">
          Frequently Asked Questions
        </h3>
        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="text-violetLigth mr-2 p-3 "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                01
              </div>
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <h6 class="text-violetLigth">
                    What can Neurocreativelab do for me?
                  </h6>
                  <div>✖</div>
                </div>
                <div class="mt-4 text-sm">
                  Neurocreativelab (NCL) is a growth & performance marketing
                  agency specializing in innovative strategies to scale
                  businesses through data-driven and creative solutions.
                </div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                02
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">Which services do you offer?</h6>
                <div>✔</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                03
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">
                  Who can benefit from your services?
                </h6>
                <div>✔</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4 ">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                04
              </div>

              <div class="flex min-w-[400px] items-center justify-between ">
                <h6 class="text-navFont">
                  How does your agency stand from others?
                </h6>
                <div>✔</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                05
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">
                  Do you specialize in any industries?
                </h6>
                <div>✔</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                06
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">
                  Can you handle international campaigns?
                </h6>
                <div>✔</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                07
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">How do you measure success?</h6>
                <div>✔</div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                08
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">What is your pricing model?</h6>
                <div>✔</div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4">
            <div class="flex">
              <div
                class="mr-2 p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                09
              </div>

              <div class="flex min-w-[400px] items-center justify-between">
                <h6 class="text-navFont">Are there any long-term contracts?</h6>
                <div>✔</div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4 text-navFont">
            <div class="flex text-navFont">
              <div
                class=" mr-2 p-3 "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                10
              </div>

              <div class="flex min-w-[400px] items-center justify-between ">
                <h6 class="">How can I get started?</h6>
                <div>✔</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
