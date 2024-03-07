import { component$ } from "@builder.io/qwik";

export const Table = component$(() => {
  return (
    <>
      <div class="mx-4 mt-5 overflow-x-auto">
        <table class="mt-5 w-full table-auto">
          <thead class="h-16 text-center">
            <tr class="h-10">
              <td class="w-2/5 text-left">Here's how we compare</td>
              <td class="bg-bgTableDark w-1/5 ">
                <img
                  width="110"
                  height="11"
                  src="https://s3-alpha-sig.figma.com/img/6b66/1841/94c276435910958cb5d007202b5edeb3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4VGyAziKIxUFomKYXnzGIb--Y43U8FWu5AZQhqY4h5MivI-YksQwrFgE2w2PzMOw7XTGoT3z8iSkkc9XI05yxRl6GJCHUt6ZsctGdrepVrGxt3f5ZyqqvhinV1R7viTRYn7L0dOIP0naRGqMPYnTceymkG6ObbTfBpESP30YJdyyofhd0x~1weBsY3WXVAaRyVkD29u0ZroUEwvLyK8JyZ-B-jAElE3TDoHfhg1~q0KzU6yggeapYywjw~oAKiy28mWQvJf0C48qGEwKac9iDI3mmkEQu1brqI2cGenpu-xqiQ27RKFtL3OZN97a2e-NbgZx3GpqcaT1kHwU7d4zg__"
                  alt=""
                  class="ml-2  hidden sm:inline"
                />
              </td>
              <td class="w-1/5">Traditional Agency</td>
              <td class="w-1/5">Hiring In-House</td>
              <td class="w-1/5">Done With Service</td>
            </tr>
          </thead>
          <tbody class="  bg-bgTable   text-center">
            <tr class=" h-20  sm:h-12 ">
              <td class="  w-2/5 pl-2 text-left">No long term contract</td>
              <td class=" bg-bgTableDark w-1/5">✔</td>
              <td class=" w-1/5">✖</td>
              <td class=" w-1/5">✔</td>
              <td class="w-1/5 ">✔</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class="h-auto w-2/5 pl-2 text-left">
                Expert & native creative strategist
              </td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✖</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class=" w-2/5 pl-2 text-left">
                Dedicated & experienced design team
              </td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✖</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class="w-2/5 pl-2 text-left">High volume creative testing</td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✔</td>
              <td class="w-1/5">✔</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class="w-2/5 pl-2 text-left">Peformance-Based Incentive</td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✔</td>
              <td class="w-1/5">✔</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class="w-2/5 pl-2 text-left">In-House European team</td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✔</td>
              <td class="w-1/5">✔</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class="w-2/5 pl-2 text-left">
                Complete full growth solution
              </td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✖</td>
            </tr>
            <tr class="h-20 sm:h-12 ">
              <td class="w-2/5 pl-2 text-left">Biweekly performance update</td>
              <td class="bg-bgTableDark w-1/5">✔</td>
              <td class="w-1/5">✖</td>
              <td class="w-1/5">✔</td>
              <td class="w-1/5">✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
});
