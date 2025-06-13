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
    <div className="mt-16 px-4 sm:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full max-w-7xl mx-auto"
      >
        {testimonial.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white w-full max-w-[30rem] sm:max-w-[33.7rem] min-h-[14rem] sm:min-h-[14.5rem] rounded-lg text-center flex flex-col items-center justify-center p-6 sm:p-8">
                <h3 className="font-bold text-[1rem] sm:text-[1.2rem]">"{item.quote}"</h3>
                <p className="mt-2 text-sm sm:text-base">"{item.content}"</p>
              </div>

              <div className="pt-6 flex items-center gap-4 justify-center pb-10">
                <div className="rounded-full border border-[#012437] flex-shrink-0">
                  <UserRound className="p-2 w-12 h-12" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#012437]">{item.author}</p>
                  <p className="text-xs text-[#00354D]">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
