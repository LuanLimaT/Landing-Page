'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import { UserRound } from 'lucide-react'
import { testimonial } from '@/constants/testimonial.constants'

export function TestimonialsSection() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={2}
      spaceBetween={40}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      className="w-full px-[2rem] max-w-[90rem]"
    >
      {testimonial.map((item) => (
        <SwiperSlide key={item.id} >
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-full max-w-[33.7rem] min-h-[14.5rem] rounded-lg text-center flex flex-col items-center justify-center p-[2rem]">
              <h3 className="font-bold">"{item.quote}"</h3>
              <p className="mt-2">"{item.content}"</p>
            </div>

            <div className="pt-[1.7rem] flex items-center gap-[1rem] justify-center pb-[4.6rem]">
              <div className="rounded-full border border-[#012437] flex-shrink-0">
                <UserRound className="p-[1rem] w-[3.5rem] h-[3.5rem]" />
              </div>
              <div>
                <p className="text-[1.2rem] leading-[1.5rem] text-[#012437]">{item.author}</p>
                <p className="text-[0.8rem] leading-[1rem] text-[#00354D]">{item.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
