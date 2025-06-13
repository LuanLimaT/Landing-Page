import { MessageCircle, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[5rem] bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)]">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[8.1rem] pt-[0.4rem] h-full">
        <img src="/logo_dark.svg" alt="Logo" width={150} className="w-[8rem] sm:w-[10rem] md:w-[13rem]" />
        <nav className="hidden md:flex gap-6 lg:gap-[4.3rem] text-[#012437] font-barlow text-sm lg:text-base">
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#nosso-trabalho">Nosso Trabalho</a>
        </nav>
        <button className="hidden md:flex items-center gap-1 bg-[#00354DF2] h-[2.8rem] lg:h-[3.1rem] rounded-lg border border-[#FF6B35] px-3 lg:px-[1rem]">
          <MessageCircle size={20} className="text-[#FF6B35]" />
          <p className="text-sm lg:text-[1.1rem] text-[#FF6B35] font-barlowCondensed">Contato</p>
        </button>
        <button className="md:hidden">
          <Menu size={28} className="text-[#012437]" />
        </button>
      </div>
    </header>
  );
}
