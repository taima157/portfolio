import { useState } from "react";
import Projeto from "./Projeto";
import ModalProjeto from "./ModalProjeto";

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-neutral-900/30 border-[1px] rounded-md w-11/12 lg:w-2/3 border-neutral-800 p-5"
    >
      <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Projetos.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <Projeto />
        <Projeto />
      </div>
    </section>
  );
}
