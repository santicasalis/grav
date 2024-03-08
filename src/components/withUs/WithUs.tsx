import { component$ } from "@builder.io/qwik";

export const WithUs = component$(() => {
  return (
    <>
      <div
        style="background: linear-gradient(180deg, #29163E 23%, #1A1A1A 75.5%);  "
        class=" mx-2 my-1 flex w-full flex-col items-center justify-center py-3 sm:my-1 sm:py-20 "
      >
        <img
          width="233"
          height="24"
          src="https://s3-alpha-sig.figma.com/img/6b66/1841/94c276435910958cb5d007202b5edeb3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4VGyAziKIxUFomKYXnzGIb--Y43U8FWu5AZQhqY4h5MivI-YksQwrFgE2w2PzMOw7XTGoT3z8iSkkc9XI05yxRl6GJCHUt6ZsctGdrepVrGxt3f5ZyqqvhinV1R7viTRYn7L0dOIP0naRGqMPYnTceymkG6ObbTfBpESP30YJdyyofhd0x~1weBsY3WXVAaRyVkD29u0ZroUEwvLyK8JyZ-B-jAElE3TDoHfhg1~q0KzU6yggeapYywjw~oAKiy28mWQvJf0C48qGEwKac9iDI3mmkEQu1brqI2cGenpu-xqiQ27RKFtL3OZN97a2e-NbgZx3GpqcaT1kHwU7d4zg__"
          alt=""
          class="mb-5 mt-20"
        />

        <div
          style="font-family: Barlow; font-size: 35px;  line-height: 46px;  text-align: center; color:#ffffff"
          class="mx-4 sm:mx-20 "
        >
          The Only Growth Partner That Delivers Exponential <br />
          Growth without Long-Term Contracts and Excessive <br />
          Retainers.
        </div>
        <div>
          <button class="barlow-font  my-8 rounded-lg bg-orange p-3   px-8 font-semibold text-orangeFont">
            {" "}
            Partner with Us{" "}
          </button>
        </div>
      </div>
    </>
  );
});
