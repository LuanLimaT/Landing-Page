export type IconName = 'ChartNoAxesCombined' | 'Cpu' | 'Cog' | 'PencilRuler'

export interface Technology {
  id: number
  icon: IconName 
  title: string
  subtitle: string
}

export const technologies: Technology[] = [
  {
    id: 1,
    icon: "ChartNoAxesCombined",
    title: "Crescimento",
    subtitle: "com Performance"
  },
  {
    id: 2,
    icon: "Cpu",
    title: "Presença e",
    subtitle: "Tecnologia"
  },
  {
    id: 3,
    icon: "Cog",
    title: "Automação e",
    subtitle: "Eficiência"
  },
  {
    id: 4,
    icon: "PencilRuler",
    title: "Marca e",
    subtitle: "Comunicação"
  }
]