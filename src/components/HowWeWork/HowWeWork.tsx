import { Search, Wrench, Rocket } from 'lucide-react';
import { work } from '@/constants/howWeWork.constants';

const iconMap = {
  Search,
  Wrench,
  Rocket
}

export function HowWeWok () {
  return (
    <section className="bg-gradient-to-r from-[#012437] to-[#1BABCA] py-[3.8rem] overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[#F5F5F5] text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem]">
          Como trabalhamos
        </h1>
      </div>

      <div className="mt-[4.2rem] flex flex-col items-center gap-[4rem] sm:flex-row sm:flex-wrap sm:justify-center lg:gap-[10.9rem] px-4">
        {work.map((work) => {
          const IconComponent = iconMap[work.icon as keyof typeof iconMap]
          return (
            <div key={work.id} className="flex flex-col items-center max-w-[18rem] text-center">
              <div className="w-[7rem] h-[8rem] sm:w-[10rem] sm:h-[11rem] mb-[1.9rem] flex items-center justify-center bg-[#5D8A9F] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                <IconComponent size={72} className="text-[#FF6B35]" />
              </div>
              <p className="text-[#E0E0E0] text-[1.2rem] sm:text-[1.5rem]">
                {work.title}<br />{work.subtitle}
              </p>
              <p className="text-[#E0E0E0] text-[1rem] sm:text-[1.2rem] pt-[1rem]">
                {work.content}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}