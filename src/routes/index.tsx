import { createFileRoute } from "@tanstack/react-router";

import {
  About,
  Advantages,
  Benefits,
  Clients,
  Contact,
  Faq,
  Gallery,
  Hero,
  Industries,
  Legal,
  Problem,
  SeoContent,
  Services,
} from "@/components/page-body";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Benefits />
      <Advantages />
      <Services />
      <Gallery />
      <Industries />
      <Clients />
      <About />
      <Contact />
      <SeoContent />
      <Faq />
      <Legal />
    </>
  );
}
