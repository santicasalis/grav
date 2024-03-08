import { component$ } from "@builder.io/qwik";
import { Table } from "./Table";

export const SeeHow = component$(() => {
  return (
    <>
      <div
        style=" background: linear-gradient(180deg, #29163E 23%, #1A1A1A 75.5%)"
        class="mx-2 my-0 flex flex-col items-center justify-center sm:mx-20"
      >
        <h3 class="font-inter mx-10 mt-8 text-center" style="font-weight: 800">
          See How We Stand Above Others
        </h3>
        <Table />
      </div>
    </>
  );
});
