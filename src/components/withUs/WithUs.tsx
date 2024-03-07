import { component$ } from "@builder.io/qwik";

export const WithUs = component$(() => {
  return (
    <>
      <div
        style="background: linear-gradient(180deg, #29163E 23%, #1A1A1A 75.5%); "
        class=" mx-5 my-5 flex flex-col items-center justify-center sm:mx-20"
      >
        <img
          width="233"
          height="24"
          src="https://s3-alpha-sig.figma.com/img/6b66/1841/94c276435910958cb5d007202b5edeb3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4VGyAziKIxUFomKYXnzGIb--Y43U8FWu5AZQhqY4h5MivI-YksQwrFgE2w2PzMOw7XTGoT3z8iSkkc9XI05yxRl6GJCHUt6ZsctGdrepVrGxt3f5ZyqqvhinV1R7viTRYn7L0dOIP0naRGqMPYnTceymkG6ObbTfBpESP30YJdyyofhd0x~1weBsY3WXVAaRyVkD29u0ZroUEwvLyK8JyZ-B-jAElE3TDoHfhg1~q0KzU6yggeapYywjw~oAKiy28mWQvJf0C48qGEwKac9iDI3mmkEQu1brqI2cGenpu-xqiQ27RKFtL3OZN97a2e-NbgZx3GpqcaT1kHwU7d4zg__"
          alt=""
          class="my-5"
        />

        <div
          style="font-family: Barlow;  font-weight: 500; line-height: 46px; letter-spacing: 0em; text-align: center;"
          class="mx-3 my-7 text-center  text-3xl sm:text-5xl"
        >
          The Only Growth Partner That Delivers Exponential Growth without
          Long-Term Contracts and Excessive Retainers.
        </div>
        <div>
          <button class="rounded-lg  bg-orange p-3 px-7    font-barlow font-semibold  text-orangeFont">
            {" "}
            Partner with Us{" "}
          </button>
        </div>
      </div>
    </>
  );
});
