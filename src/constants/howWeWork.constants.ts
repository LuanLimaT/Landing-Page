export type IconName = 'Search' | 'Wrench' | 'Rocket' 

export interface Worker {
  id: number
  icon: IconName 
  title: string
  subtitle: string
  content: string
}

export const work: Worker[] = [
  {
    id: 1,
    icon: "Search",
    title: "Diagnóstico ",
    subtitle: "Estratégico",
    content: "Analisamos seu negócio, identificamos pontos de melhoria e traçamos um plano com foco em crescimento real."
  },
  {
    id: 2,
    icon: "Wrench",
    title: "Execução",
    subtitle: "Personalizada",
    content: "Desenvolvemos e implementamos soluções sob medida: marketing, tecnologia, automações e design que geram impacto."
  },
  {
    id: 3,
    icon: "Rocket",
    title: "Escalada e",
    subtitle: "Impulsionamento",
    content: "Após a entrega, seguimos otimizando e impulsionando seus resultados com base em dados e performance real"
  },
]