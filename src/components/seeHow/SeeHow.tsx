import { component$ } from "@builder.io/qwik";
import { Table } from "./Table";

export const SeeHow = component$(() => {
  return (
    <>
      <div
        style=" background: linear-gradient(180deg, #29163E 23%, #1A1A1A 75.5%);"
        class=" flex flex-col items-center justify-center"
      >
        <h3 class="mx-10 mt-8 text-center" style="font-weight: 800">
          See How We Stand Above Others
        </h3>
        <Table />
      </div>
    </>
  );
});
