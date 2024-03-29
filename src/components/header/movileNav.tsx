import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const MobileNav = component$(() => {
  const headerNavLinks = [
    { href: "/", title: "About" },
    { href: "/", title: "Services" },
    { href: "/", title: "Case Studies" },
    { href: "/", title: "Growth Matrix" },
    { href: "/", title: "Resources" },
    { href: "/", title: "Careers" },
  ];
  const toggleState = useSignal(false);

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick$={() => (toggleState.value = !toggleState.value)}
        class="sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 text-navFont "
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        class={`fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.85] ${
          toggleState.value ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="flex justify-end">
          <button
            class="mr-12 mt-11 h-8 w-8"
            aria-label="Toggle Menu"
            onClick$={() => {
              document.body.style.overflow = toggleState.value
                ? "auto"
                : "hidden";
              toggleState.value = !toggleState.value;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class=" h-8 w-8 text-gray-100 "
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav class="fixed mt-2 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} class="px-12 py-3">
              <Link
                href={link.href}
                class="text-2xl font-bold tracking-widest text-white "
                onClick$={() => {
                  document.body.style.overflow = toggleState.value
                    ? "auto"
                    : "hidden";
                  toggleState.value = !toggleState.value;
                }}
              >
                {link.title}
              </Link>
            </div>
          ))}
          <button class="px-12 py-3  text-2xl font-bold  text-orange">
            {" "}
            Get in Touch
          </button>
        </nav>
      </div>
    </>
  );
});
