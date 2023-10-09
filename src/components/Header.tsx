export default function Header() {
  return (
    <header className="w-full p-5 bg-neutral-900/10 sticky border-b-[1px] border-neutral-800 flex flex-col sm:flex-row sm:justify-around sm:items-center gap-5">
      <h1 className="text-2xl self-start font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent ">
        <a href="/" className="w-full">
          gustavo taima.
        </a>
      </h1>
      <div className="flex justify-between w-full sm:w-auto sm:gap-10 self-end sm:self-auto">
        <a
          className="group text-neutral-100 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text hover:text-transparent flex flex-col font-medium tracking-wide gap-1"
          href="#sobre"
        >
          <span>sobre</span>
          <div className="w-0 group-hover:w-full duration-300 h-[2px] bg-gradient-to-r from-pink-600 to-purple-600" />
        </a>

        <a
          className="group text-neutral-100 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text hover:text-transparent flex flex-col font-medium tracking-wide gap-1"
          href="#tecnologias"
        >
          <span>tecnologias</span>
          <div className="w-0 group-hover:w-full duration-300 h-[2px] bg-gradient-to-r from-pink-600 to-purple-600" />
        </a>

        <a
          className="group text-neutral-100 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text hover:text-transparent flex flex-col font-medium tracking-wide gap-1"
          href="#projetos"
        >
          <span>projetos</span>
          <div className="w-0 group-hover:w-full duration-300 h-[2px] bg-gradient-to-r from-pink-600 to-purple-600" />
        </a>

        <a
          className="group text-neutral-100 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text hover:text-transparent flex flex-col font-medium tracking-wide gap-1"
          href="/"
        >
          <span>contato</span>
          <div className="w-0 group-hover:w-full duration-300 h-[2px] bg-gradient-to-r from-pink-600 to-purple-600" />
        </a>
      </div>
    </header>
  );
}
