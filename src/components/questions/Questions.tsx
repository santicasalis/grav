import { component$, useSignal } from "@builder.io/qwik";
import { OficialPartner } from "../oficialPartner/OficialPartner";

export const Questions = component$(() => {
  const toggleAnswer = useSignal(false);

  return (
    <>
      <div
        style="background: linear-gradient(180deg, #1A1A1A 26.5%, #29163E 74%); "
        class="mx-1 flex flex-col items-center justify-center sm:mx-20"
      >
        <h3 class="mx-8 mt-8 text-center" style="font-weight: 800;">
          Frequently Asked Questions
        </h3>
        <div class="mx-1 mt-8 grid grid-cols-1 gap-4 sm:mx-3 lg:grid-cols-2 xl:grid-cols-2">
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4 p-3  "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block; color:  #C5B2E5;"
              >
                {" "}
                01
              </div>
              <div class="flex flex-col ">
                <div class="flex flex-col items-start justify-start">
                  <div class="flex  justify-around">
                    <h6 class="pr-2 text-left sm:pr-10" style="color:  #C5B2E5">
                      What can Neurocreativelab do for me?
                    </h6>
                    <button
                      onClick$={() =>
                        (toggleAnswer.value = !toggleAnswer.value)
                      }
                      class="ml-1 text-2xl sm:ml-12"
                    >
                      {toggleAnswer.value ? "✖" : "✚"}
                    </button>
                  </div>
                  {toggleAnswer.value && (
                    <div class="mt-4  pr-10 text-sm">
                      Neurocreativelab (NCL) is a growth & performance marketing{" "}
                      <br />
                      agency specializing in innovative strategies to scale
                      businesses <br /> through data-driven and creative
                      solutions.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-3 sm:p-4">
            <div class=" mx-3 flex">
              <div
                class=" mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                02
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">Which services do you offer?</h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                03
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">
                  Who can benefit from your services?
                </h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4 ">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                04
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">
                  How does your agency stand from others?
                </h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                05
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">
                  Do you specialize in any industries?
                </h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                06
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">
                  Can you handle international campaigns?
                </h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                07
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">How do you measure success?</h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                08
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">What is your pricing model?</h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4">
            <div class="mx-3 flex">
              <div
                class="mr-4  p-3 text-navFont "
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                09
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="text-navFont">Are there any long-term contracts?</h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>

          <div class="flex max-w-[600px] flex-col p-4 text-navFont">
            <div class="flex text-navFont">
              <div
                class=" mx-3 mr-4  p-3"
                style="width: 60px; height: 60px; padding: 20px; border-radius: 12px; border: 1px solid; border-image-source: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%); background-color: #242424; display: inline-block;"
              >
                {" "}
                10
              </div>

              <div class="flex min-w-[300px] items-center justify-between  sm:min-w-[400px]">
                <h6 class="">How can I get started?</h6>
                <div class="text-2xl">✚</div>
              </div>
            </div>
          </div>
        </div>
        <OficialPartner />
      </div>
    </>
  );
});
