export function Footer() {
  return (
    // <footer className="h-[4.1rem] bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)]">
    //   <div className="flex justify-between items-center px-[8.1rem]">
    //     <img src="logo_dark.svg" alt="logo" className="w-[8.6rem] h-[2.8rem]"/>
    //     <nav className="flex gap-[1.9rem] text-[#012437]">
    //       <a href="#servicos">Serviços</a>
    //       <a href="#depoimentos">Depoimentos</a>
    //       <a href="#nosso-trabalho">Nosso Trabalho</a>
    //       <a href="#contato">Contato</a>
    //     </nav>
    //   </div>
    // </footer>

    <footer className="h-[4.1rem] bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)]">
  <div className="mx-[8.1rem] sm:px-8 mx-auto flex flex-wrap justify-between items-center h-full">
    <img
      src="logo_dark.svg"
      alt="logo"
      className="w-[8.6rem] h-auto hidden sm:block"
    />
    <nav className="flex flex-wrap gap-4 sm:gap-8 text-[#012437] text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto mt-2 sm:mt-0">
      <a href="#servicos" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1BABCA] rounded">Serviços</a>
      <a href="#depoimentos" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1BABCA] rounded">Depoimentos</a>
      <a href="#nosso-trabalho" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1BABCA] rounded">Nosso Trabalho</a>
      <a href="#contato" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1BABCA] rounded">Contato</a>
    </nav>
  </div>
</footer>


  )
}