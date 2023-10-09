export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-neutral-900/10  border-[1px] rounded-md w-11/12 lg:w-2/3 border-neutral-800 p-5"
    >
      <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Projetos.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="bg-neutral-800/30  border-[1px] border-neutral-800 rounded-md p-5 flex flex-col gap-4"></div>
        <div className="bg-neutral-800/30  border-[1px] border-neutral-800 rounded-md p-5 flex flex-col gap-4"></div>
      </div>
    </section>
  );
}
