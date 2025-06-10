'use client';

import { UserRound } from 'lucide-react';
import { testimonial } from '@/constants/testimonial.constants';
import { useTestuseTestimonialSlider } from '@/hooks/useTestimonialSlider'

export function Testimonials() {

  const { sliderRef, slider } = useTestuseTestimonialSlider(4);

  return (
    <section className="relative bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)] h-[54rem] overflow-hidden">
      <div className="flex flex-col justify-items-center items-center pt-[5rem]">
        <h1 className="text-[4rem] text-[#012437]">Depoimentos</h1>
        <p className=" text-[2.3rem] text-[#00354D] text-center pt-[3.4rem]">
          Nosso sucesso está diretamente ligado  ao sucesso dos nossos clientes,<br /> e nossa identidade reflete
          <span className=" text-[#FF6B35]"> seriedade, humanidade, inovação e força  estrutural.</span>
        </p>
      </div>

      <div ref={sliderRef} className= " Keen-slider flex items-center justify-center overflow-hidden pt-[4.8rem] ">
          {testimonial.map((item) =>(
          <div 
            key={item.id} 
            className="keen-slider__slide flex flex-col flex items-center justify-center mx-auto"
          >
            <div className="bg-white w-full max-w-[33.7rem] min-h-[14.5rem] rounded-lg text-center flex flex-col items-center justify-center p-[2rem]">
              <h3 className="font-bold">"{item.quote}"</h3>
              <p className='mt-2'>"{item.content}"</p>
            </div>

            <div className="pt-[1.7rem] flex items-center gap-[1rem] w-full max-w-[33.7rem]">
              <div className='rounded-full border border-[#012437] flex-shrink-0'>
                <UserRound className="p-[1rem] w-[3.5rem] h-[3.5rem]"/>
              </div>
                <div>
                  <p className='text-[1.2rem] leading-[1.5rem] text-[#012437]'>{item.author}</p>
                  <p className='text-[0.8rem] leading-[1rem] text-[#00354D]'>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}