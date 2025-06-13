import { TestimonialsSection } from "./TestimonialsSection";

export function Testimonials() {
  return (
    <section className="relative bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)] overflow-hidden py-20">
      <div className="flex flex-col items-center text-center px-4 sm:px-8">
        <h1 className="text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] text-[#012437]">
          Depoimentos
        </h1>
        <p className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] text-[#00354D] pt-6 max-w-[90%]">
          Nosso sucesso está diretamente ligado ao sucesso dos nossos clientes,<br className="hidden sm:block" /> 
          e nossa identidade reflete <span className="text-[#FF6B35]">seriedade, humanidade, inovação e força estrutural.</span>
        </p>
      </div>

      <TestimonialsSection />
    </section>
  )
}
