export function Hero() {
  return (
    <div className="relative bg-[linear-gradient(89.98deg,_#E0E0E0_-19.18%,_#1BABCA_99.98%)] h-[54rem] overflow-hidden">
      <img
        src="fundobg.png"
        alt=""
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[28.4rem] object-contain mt-[3rem]  pointer-events-none"
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-[#012437] text-[5.1rem] max-w-[80rem] leading-tight font-bold">
          Seu limite é nosso próximo <br />ponto de partida
        </h1>
        <p className="text-[#00354D] text-2xl mt-4">
          O impulso certo para seu negócio crescer.
        </p>
        <button className="mx-auto mt-[4rem] w-[16.1rem] h-[4.5rem] bg-[#1BABCA] text-[#00354D] text-[1.8rem] rounded-lg border border-[#00354D]">
          Saiba mais
        </button>
      </div>
    </div>
  ) 
}
