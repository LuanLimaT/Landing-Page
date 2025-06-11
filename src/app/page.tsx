import { CallToAction } from "@/components/CallToAction/CallToAction";
import FloatingChat from "@/components/FloatingChat/FloatingChat";
import { Hero } from "@/components/Hero/Hero";
import { HowWeWok } from "@/components/HowWeWork/HowWeWork";
import { Technologies } from "@/components/Technologies/Technologies";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Footer } from "@/shared/Footer/Footer";
import { Header } from "@/shared/Header/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        < Hero />
        < FloatingChat />
        < Technologies />
        < Testimonials/>
        < HowWeWok />
        < CallToAction />
        < Footer />
      </section>
    </div>
  );
}
