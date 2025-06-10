import { Search, Wrench, Rocket } from 'lucide-react';
import { work } from '@/constants/howWeWork.constants';

const iconMap = {
  Search,
  Wrench,
  Rocket
}

export function HowWeWok () {
  return (
    <section className="bg-gradient-to-r from-[#012437] to-[#1BABCA] h-[49rem] overflow-hidden">
      <div className="flex flex-col justify-items-center items-center pt-[3.8rem]">
        <h1 className="text-[#F5F5F5] text-[4rem]">Como trabalhamos</h1>
      </div>
      <div className="flex justify-center gap-[10.9rem] pt-[4.2rem]">
        {work.map((work) => {
          const IconComponent = iconMap[work.icon as keyof typeof iconMap]
            return (
              <div key={work.id} className="flex flex-col items-center">
                  <div className="w-[10rem] h-[11rem] mb-[1.9rem] flex items-center justify-center bg-[#5D8A9F] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                      <IconComponent size={92} className="text-[#FF6B35]" />
                  </div>
                  <p className="text-[#E0E0E0] text-[1.5rem] text-center">
                      {work.title}<br />{work.subtitle}
                  </p>
                  <p className="text-[#E0E0E0] text-[1.2rem] w-[18.8rem] text-center pt-[1rem]">
                    {work.content}
                  </p>
              </div>
            )
        })}
      </div>
    </section>
  )
}