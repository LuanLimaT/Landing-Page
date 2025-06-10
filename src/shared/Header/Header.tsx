import { MessageCircle } from 'lucide-react'; 

export function Header () {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[5rem] bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)]">
      <div className="flex items-center justify-between px-[8.1rem] pt-[0.4rem]">
        <img src="/logo_dark.svg" alt="Logo" width={207} height={88} />
        <nav className="flex gap-[4.3rem] text-[##012437] font-barlow">
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#nosso-trabalho">Nosso Trabalho</a>
        </nav>
        <button className='flex items-center gap-[0.4rem] bg-[#00354DF2] w-[7.5rem] h-[3.1rem] rounded-lg border border-[#FF6B35] px-[1rem]'>
          <MessageCircle size={24} className="text-[#FF6B35]"/>
          <p className="text-[1.1rem] text-[#FF6B35] font-barlowCondensed">Contato</p>
        </button>
      </div>
    </header>
  ) 
}

