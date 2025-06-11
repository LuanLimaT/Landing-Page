import { TestimonialsSection } from "./TestimonialsSection";

export function Testimonials() {

  return (
    <section className="relative bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)] h-[54rem] overflow-hidden">
      <div className="flex flex-col justify-items-center items-center pt-[5rem] pb-[4.8rem]">
        <h1 className="text-[4rem] text-[#012437]">Depoimentos</h1>
        <p className=" text-[2.3rem] text-[#00354D] text-center pt-[3.4rem]">
          Nosso sucesso está diretamente ligado  ao sucesso dos nossos clientes,<br /> e nossa identidade reflete
          <span className=" text-[#FF6B35]"> seriedade, humanidade, inovação e força  estrutural.</span>
        </p>
      </div>
      < TestimonialsSection />
    </section>
  )
}