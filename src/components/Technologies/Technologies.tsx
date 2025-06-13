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
    <section className="bg-gradient-to-r from-[#012437] to-[#1BABCA] py-[6rem] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
        
        {/* Título */}
        <div className="flex flex-col items-center text-center px-4 sm:px-6">
          <h1 className="text-[#F5F5F5] text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-[90%] sm:max-w-[49rem]">
            Tecnologia que desbloqueia os seus limites
          </h1>
        </div>

        {/* Ícones + textos */}
        <div className="mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12 sm:gap-[3.6rem] px-4">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
            return (
              <div key={tech.id} className="flex flex-col items-center text-center w-[10rem]">
                <div className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[11rem] mb-4 flex items-center justify-center bg-[#5D8A9F] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <IconComponent size={64} className="text-[#FF6B35]" />
                </div>
                <p className="text-[#E0E0E0] text-base sm:text-lg">
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
