import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader, ScrollRail } from "@/components/chrome";
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
  useReveal,
} from "@/components/page-body";
import { WorldScrub } from "@/components/world-scrub";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useReveal();
  return (
    <div id="top" className="relative min-h-screen bg-transparent text-fg">
      <WorldScrub />

      <div className="grain" />
      <ScrollRail />
      <div className="relative z-10">
        <SiteHeader />
        <main>
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
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
