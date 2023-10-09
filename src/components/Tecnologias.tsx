export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="bg-neutral-900/10  border-[1px] rounded-md w-11/12 lg:w-2/3 border-neutral-800 p-5"
    >
      <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Tecnologias.
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <div className="bg-neutral-800/30  border-[1px] border-neutral-800 rounded-md p-5 flex flex-col gap-4 hover:scale-105 duration-500">
          <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent self-start text-lg">
            Front-End
          </span>
          <hr className="border-neutral-800" />
          <p className="text-sm sm:text-base">
            Javascript, Typescript, HTML, CSS, Git, React, Tailwind
          </p>
        </div>
        <div className="bg-neutral-800/30  border-[1px] border-neutral-800 rounded-md p-5 flex flex-col gap-4 hover:scale-105 duration-500">
          <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent self-start text-lg">
            Back-End
          </span>
          <hr className="border-neutral-800" />
          <p className="text-sm sm:text-base">
            Javascript, Typescript, NodeJS, MySQL, Postman
          </p>
        </div>

        <div className="bg-neutral-800/30  border-[1px] border-neutral-800 rounded-md p-5 flex flex-col gap-4 hover:scale-105 duration-500">
          <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent self-start text-lg">
            Mobile
          </span>
          <hr className="border-neutral-800" />
          <p className="text-sm sm:text-base">
            Javascript, Typescript, Expo, ReactNative, NativeBase
          </p>
        </div>
      </div>
    </section>
  );
}
