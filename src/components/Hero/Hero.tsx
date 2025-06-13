export function Hero() {
  return (
    <div className="relative bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)] h-[44rem] sm:h-[54rem] overflow-hidden">
      <img
        src="fundobg.png"
        alt=""
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[18rem] sm:w-[28.4rem] object-contain mt-[3rem] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6">
        <h1 className="text-[#012437] text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.1rem] leading-tight font-bold max-w-[90%] sm:max-w-[80rem]">
          Seu limite é nosso próximo <br className="hidden sm:block" /> ponto de partida
        </h1>
        <p className="text-[#00354D] text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-[80%] sm:max-w-[38rem]">
          O impulso certo para seu negócio crescer.
        </p>
        <button className="mx-auto mt-10 w-[12rem] sm:w-[14rem] lg:w-[16.1rem] h-[3.5rem] sm:h-[4rem] lg:h-[4.5rem] bg-[#1BABCA] text-[#00354D] text-base sm:text-[1.3rem] lg:text-[1.8rem] rounded-lg border border-[#00354D]">
          Saiba mais
        </button>
      </div>
    </div>
  );
}
