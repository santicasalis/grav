import { component$ } from "@builder.io/qwik";
import { Clients } from "~/components/clients/Clients";
import { HeroSection } from "~/components/heroSection/HeroSection";
import { OficialPartner } from "~/components/oficialPartner/OficialPartner";
import { OurServices } from "~/components/ourServices/OurServices";
import { Questions } from "~/components/questions/Questions";
import { SeeHow } from "~/components/seeHow/SeeHow";
import { Testimonials } from "~/components/testimonials/Testimonials";
import { WhyChooseUs } from "~/components/whyChooseUs/WhyChooseUs";

export default component$(() => {
  return (
    <>
      <div>
        <HeroSection />
        <Clients />
        <WhyChooseUs />
        <Testimonials />
        <OurServices />
        <SeeHow />
        <Questions />
        <OficialPartner />
      </div>
    </>
  );
});
