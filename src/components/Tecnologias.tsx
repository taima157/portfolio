import Tecnologia from "./Tecnologia";

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="bg-neutral-900/30  border-[1px] rounded-md w-11/12 lg:w-2/3 border-neutral-800 p-5 "
    >
      <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Tecnologias.
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <Tecnologia
          title="Front-End"
          desc="Javascript, Typescript, HTML, CSS, Git, React, Tailwind"
        />
        <Tecnologia
          title="Back-End"
          desc="Javascript, Typescript, NodeJS, MySQL, Postman"
        />
        <Tecnologia
          title="Mobile"
          desc="Javascript, Typescript, Expo, ReactNative, NativeBase"
        />
      </div>
    </section>
  );
}
