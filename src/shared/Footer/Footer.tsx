export function Footer() {
  return (
    <footer className="h-[4.1rem] bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)]">
      <div className="flex justify-between items-center px-[8.1rem]">
        <img src="logo_dark.svg" alt="logo" className="w-[8.6rem] h-[2.8rem]"/>
        <nav className="flex gap-[1.9rem] text-[#012437]">
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#nosso-trabalho">Nosso Trabalho</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </footer>
  )
}