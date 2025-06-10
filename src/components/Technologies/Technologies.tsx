import { ChartNoAxesCombined, Cpu, Cog, PencilRuler } from 'lucide-react'
import { technologies } from '@/constants/Technologies.constants'

const iconMap = {
  ChartNoAxesCombined,
  Cpu,
  Cog,
  PencilRuler
}

export function Technologies() {
  return (
    <section className="bg-gradient-to-r from-[#012437] to-[#1BABCA] h-[52rem] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 pt-[8.4rem]">
        <div className="flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-[#F5F5F5] text-6xl max-w-[49rem] leading-tight">
            Tecnologia que desbloqueia os seus limites
          </h1>
        </div>
        <div className="flex justify-center gap-[3.6rem] pt-[7rem]">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
            return (
              <div key={tech.id}>
                <div className="w-[10rem] h-[11rem] mb-2 flex items-center justify-center bg-[#5D8A9F] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <IconComponent size={92} className="text-[#FF6B35]" />
                </div>
                <p className="text-[#E0E0E0] text-[1.5rem] text-center">
                  {tech.title}<br />{tech.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}